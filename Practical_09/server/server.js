require('dotenv').config();
const express = require('express'); const mongoose = require('mongoose'); const multer = require('multer'); const path = require('path'); const fs = require('fs');
const app = express(); const PORT = Number(process.env.PORT || 5309); app.use(express.json());
const uploadDir = path.join(__dirname, 'uploads'); fs.mkdirSync(uploadDir, { recursive: true });
const Attachment = mongoose.model('ResearchAttachment', new mongoose.Schema({ title: {type:String, required:true}, originalName:String, storedName:String, mimeType:String, size:Number, createdAt:{type:Date,default:Date.now} }));
const storage = multer.diskStorage({ destination: (_req,_file,cb) => cb(null, uploadDir), filename: (_req,file,cb) => cb(null, `${Date.now()}-${Math.random().toString(36).slice(2,8)}${path.extname(file.originalname)}`) });
const upload = multer({ storage, limits:{fileSize:4*1024*1024}, fileFilter:(_req,file,cb) => cb(null,['application/pdf','image/png','image/jpeg','text/plain'].includes(file.mimetype)) });
app.get('/', (_req,res) => res.json({app:'Research Attachment Vault', endpoints:['GET /api/attachments','POST /api/attachments (multipart field attachment)']}));
app.get('/api/attachments', async (_req,res) => { try { res.json(await Attachment.find().sort({createdAt:-1})); } catch(e) { res.status(500).json({error:e.message}); } });
app.post('/api/attachments', upload.single('attachment'), async (req,res) => {
 if (!req.file) return res.status(400).json({error:'Provide a PDF, PNG, JPEG or TXT file (max 4 MB)'});
 const title = (req.body.title || '').trim(); if (!title) { fs.unlink(req.file.path,()=>{}); return res.status(400).json({error:'title is required'}); }
 try { const record = await Attachment.create({title,originalName:req.file.originalname,storedName:req.file.filename,mimeType:req.file.mimetype,size:req.file.size}); res.status(201).json(record); }
 catch(e) { fs.unlink(req.file.path,()=>{}); res.status(500).json({error:e.message}); }
});
app.use((err,_req,res,_next) => res.status(400).json({error:err.message}));
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pranjal_research_vault').then(()=>app.listen(PORT,()=>console.log(`Research Vault running on http://localhost:${PORT}`))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exitCode=1;});
