# Ghosted — Job Application Tracker

Ghosted is a simple job application tracker built with Next.js and Prisma.  
It helps you keep track of applications, statuses, and avoid getting... ghosted.

## Tech Stack
- Next.js (App Router, TypeScript)
- Prisma ORM
- PostgreSQL (hosted via Prisma Data Platform)

## Features (MVP)
- Create job applications
- View all jobs
- Update job status
- Delete jobs
- Track application stages (Applied, Interview, Offer, Rejected, Ghosted)

## Project Structure

app/
api/
jobs/
route.ts # GET (all), POST
[id]/
route.ts # GET (one), PATCH, DELETE
lib/
prisma.ts # Prisma client instance
prisma/
schema.prisma # DB schema


## Getting Started

### 1. Install dependencies

npm install


### 2. Set up environment variables

Create a `.env` file:


DATABASE_URL="your_postgres_connection_string"


### 3. Run Prisma


npx prisma generate
npx prisma migrate dev


### 4. Start the app


npm run dev


App will be running at:

http://localhost:3000


## API Endpoints

### Jobs
- `GET /api/jobs` — Get all jobs
- `POST /api/jobs` — Create job

### Job by ID
- `GET /api/jobs/:id` — Get single job
- `PATCH /api/jobs/:id` — Update job
- `DELETE /api/jobs/:id` — Delete job


## Development Notes
- Uses Next.js App Router route handlers
- Prisma client is centralized to avoid multiple DB connections
- Minimal validation (MVP stage)

## Roadmap
- Basic UI for viewing and creating jobs
- Status filtering
- Better validation
- Authentication
- Analytics/Dashboard (response rate, etc.)

## License
MIT
