import JobRow from "./JobRow";
import { Job } from "@/types/job";

type Props = {
  jobs: Job[];
  onDelete: (id: string) => void;
  onEdit: (job: Job) => void;
  onView: (job: Job) => void;
  onStatusChange: (id: string, status: string) => void;
};

export default function JobList({
  jobs,
  onDelete,
  onEdit,
  onView,
  onStatusChange,
}: Props) {
  return (
    <div className="mt-10 w-full flex flex-col gap-4">
      {jobs.map((job) => (
        <JobRow
          key={job.id}
          job={job}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}