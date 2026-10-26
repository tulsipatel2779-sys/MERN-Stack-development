# Practical 08 — Event RSVP API

Express routing, request middleware, query filtering, parameter routes, validation and error handling. Port 5308. No database; RSVPs are in memory.

```bash
cd server && npm install && npm start
```

Try `GET /`, `GET /api/events`, `GET /api/events?category=Workshop`, `GET /api/events/1`, and `POST /api/rsvps` with JSON `{"eventId":1,"name":"Asha Mehta","email":"asha@example.com"}`.
