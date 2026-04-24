import { prisma } from "@/lib/prisma";

async function getId(context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  return Number(id);
}

// GET a job by ID
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
   const id = await getId(context);

  const job = await prisma.job.findUnique({
    where: { id },
  });

  if (!job) {
    return Response.json({ error: "Job not found" }, { status: 404 });
  }

  return Response.json(job);
}

// DELETE a job by ID
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
    const params = await context.params;
    const id: number = Number(params.id);

  const job = await prisma.job.delete({
    where: { id },
  });

  return Response.json(job);
}

// PATCH a job by ID
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
   const id = await getId(context);

  const body = await req.json();
  const job = await prisma.job.update({
    where: { id },
    data: body,
  });

  return Response.json(job);
}
