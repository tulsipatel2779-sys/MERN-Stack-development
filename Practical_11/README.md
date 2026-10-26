# Practical 11 — Neighbourhood Stories

Community article publishing API with account registration, JWT login and author/moderator roles. API port 5311; client port 5185. MongoDB required.

First registered user becomes moderator; later users become authors. Keep this bootstrap behavior local-only and do not expose the app publicly. Copy `.env.example` to `.env` and set a unique `JWT_SECRET`.
