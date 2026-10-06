# NGO Website Starter (Next.js + Express + MongoDB)

A customizable NGO website starter with a public site, MongoDB-backed content APIs, admin login, CRUD endpoints for content, and local image uploads.

## Requirements
- Node.js 20.9+ (recommended for current Next.js)
- MongoDB Community Server running locally, or a MongoDB Atlas connection string
- npm

## 1. Configure MongoDB
Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI`.
For local MongoDB:
`MONGO_URI=mongodb://127.0.0.1:27017/ngo_website`

## 2. Install dependencies
Open two terminals from the project root.

Terminal 1:
```bash
cd backend
npm install
cp .env.example .env
npm run seed:admin
npm run dev
```
On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

Terminal 2:
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```
On Windows PowerShell, use `Copy-Item .env.example .env.local`.

Open http://localhost:3000 and http://localhost:5000/api/health.

## Admin login
After running `npm run seed:admin`, default credentials are:
- Email: `admin@example.com`
- Password: `ChangeMe123!`

Change `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env` before seeding, and change the password after first login. Do not deploy with the example credentials.

## Features
- Responsive public website with Home, Programs, Projects, News, Reports, Gallery, Contact
- Admin login and dashboard
- Protected admin CRUD APIs for programs, projects, news, reports, gallery, partners, and team
- Contact form API
- Local image upload API using Multer (files served from `/uploads`)
- MongoDB models and initial admin seeding script

## Notes / production checklist
- This is a starter project, not a fully audited production system.
- Use HTTPS and a strong unique JWT_SECRET in production.
- Configure exact CORS origins using `FRONTEND_URL`.
- Local uploads are suitable for development/single-server deployments. For serverless deployment, use Cloudinary or object storage.
- Add rate limiting, email verification/password reset, backups, monitoring, and moderation before public production use.
- The sample admin interface is a foundation; content management screens can be expanded using the provided REST endpoints.
