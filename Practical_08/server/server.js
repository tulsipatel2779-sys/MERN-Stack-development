const express = require('express');
const app = express();
const PORT = 5308;
app.use(express.json());
app.use((req, res, next) => { res.set('X-Project', 'Event-RSVP'); console.log(`${req.method} ${req.path}`); next(); });
const events = [
  { id: 1, title: 'Frontend Workshop', category: 'Workshop', seats: 24 },
  { id: 2, title: 'Campus Film Night', category: 'Social', seats: 80 },
  { id: 3, title: 'Career Q&A', category: 'Career', seats: 40 }
];
let rsvps = [];
app.get('/', (req, res) => res.json({ app: 'Event RSVP API', routes: ['GET /api/events', 'GET /api/events/:id', 'POST /api/rsvps'] }));
app.get('/api/events', (req, res) => { const category = (req.query.category || '').toLowerCase(); res.json(events.filter(e => !category || e.category.toLowerCase() === category)); });
app.get('/api/events/:id', (req, res) => { const event = events.find(e => e.id === Number(req.params.id)); return event ? res.json(event) : res.status(404).json({ error: 'Event not found' }); });
app.post('/api/rsvps', (req, res) => {
 const { eventId, name, email } = req.body;
 if (!events.some(e => e.id === Number(eventId))) return res.status(400).json({ error: 'Valid eventId is required' });
 if (!name || !name.trim() || !/^\S+@\S+\.\S+$/.test(email || '')) return res.status(400).json({ error: 'Name and valid email are required' });
 const item = { id: rsvps.length + 1, eventId: Number(eventId), name: name.trim(), email };
 rsvps.push(item); res.status(201).json(item);
});
app.get('/api/rsvps', (req, res) => res.json(rsvps));
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.listen(PORT, () => console.log(`Event RSVP API listening on http://localhost:${PORT}`));
