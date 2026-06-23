import { prisma } from "@/lib/prisma";
import type { Job } from "@/app/generated/prisma/client";
import JobRow from "../Components/JobRow";
import JobForm from "../Components/JobForm";

export default async function Jobs() {
  const jobs: Job[] = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <>
      <JobForm />
      {jobs.length === 0 ? (
        <h1>No jobs yet</h1>
      ) : (
        jobs.map((job) => <JobRow key={job.id} job={job} />)
      )}
    </>
  );
}
