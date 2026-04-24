import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  // 1. Insert test job
  const job = await prisma.job.create({
    data: {
      companyName: 'company',
      roleTitle: 'full stack test',
      status: 'REJECTED',
    },
  });

  // 2. Read jobs
  const jobs = await prisma.job.findMany();

  return NextResponse.json({
    created: job,
    allJobs: jobs,
  });
}