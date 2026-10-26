# Practical 09 — Research Attachment Vault

Upload research attachments with Multer and store metadata in MongoDB. Port 5309. Accepted MIME types: PDF, PNG, JPEG and plain text; maximum size 4 MB.

```bash
cd server && npm install
# copy .env.example to .env if changing MongoDB
npm start
```

`POST /api/attachments` multipart form-data field `attachment`; `GET /api/attachments` lists metadata. Uploaded files are saved in `server/uploads`.
