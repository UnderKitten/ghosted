import { prisma } from "@/lib/prisma";

// GET all jobs
export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(jobs);
}

// POST a new job
export async function POST(req: Request) {
  const { companyName, roleTitle, jobLink, notes } = await req.json();
  const job = await prisma.job.create({
    data: { companyName, roleTitle, jobLink, notes },
  });
  return Response.json(job);
}
