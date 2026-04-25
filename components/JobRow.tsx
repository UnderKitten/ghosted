import { Job, STATUS_OPTIONS, statusColors } from "@/types/job";

type Props = {
  job: Job;
  onDelete: (id: string) => void;
  onEdit: (job: Job) => void;
  onView: (job: Job) => void;
  onStatusChange: (id: string, status: string) => void;
};

export default function JobRow({
  job,
  onDelete,
  onEdit,
  onView,
  onStatusChange,
}: Props) {
  return (
    <div
      className={`
    w-full max-w-xs mx-auto md:max-w-none md:mx-0 md:flex items-center text-center md:text-start gap-4 p-4 rounded-xl ${statusColors[job.status]}
  `}
    >
      <div className=" min-w-20 flex-auto ">
        <p>{job.companyName}</p>
        <p className="text-sm text-gray-400 whites ">{job.roleTitle}</p>
      </div>

      <div className="shrink-0">
        <select
          defaultValue={job.status}
          className="border border-gray-600 bg-gray-800 text-white rounded px-2 py-1"
          onChange={(e) => onStatusChange(job.id, e.target.value)}
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <span className="text-gray-400 shrink-0 text-sm whitespace-nowrap mr-2">
        {new Date(job.createdAt).toLocaleDateString()}
      </span>

      <span className="text-gray-400 shrink-0 text-sm whitespace-nowrap">
        {new Date(job.updatedAt).toLocaleDateString()}
      </span>

      <div className="flex flex-col md:flex-row gap-2 shrink-0">
        <button
          onClick={() => onView(job)}
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded"
        >
          View
        </button>

        <button
          onClick={() => onEdit(job)}
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(job.id)}
          className="px-2 py-1 bg-red-700 hover:bg-red-600 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
