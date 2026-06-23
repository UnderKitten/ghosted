import type { Job } from "@/app/generated/prisma/client";

type Props = { job: Job };

export default function JobRow({ job }: Props) {
  return (
    <>
      <h1>{job.roleTitle}</h1>
    </>
  );
}
