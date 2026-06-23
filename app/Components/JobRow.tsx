import type { Job } from "@/app/generated/prisma/client";
import { deleteJob } from "../jobs/actions";
import Form from "next/form";

type Props = { job: Job };

export default function JobRow({ job }: Props) {
  return (
    <>
      <div className="flex items-center justify-between border-b py-2">
        <span className="font-medium">{job.roleTitle}</span>
        <Form action={deleteJob}>
          <input type="hidden" name="id" value={job.id} />
          <button type="submit" className="text-red-600 hover:underline">
            Delete
          </button>
        </Form>
      </div>
    </>
  );
}
