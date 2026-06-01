import { Job } from "@/types/job";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  job?: Job | null;
};

export default function JobFormModal({ isOpen, onClose, mode, job }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-lg w-full max-w-md p-6 relative border border-gray-700 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">
          {mode === "add" ? "Add Job" : "Edit Job"}
        </h2>

        <div className="flex flex-col gap-3">
          <input
            defaultValue={job?.roleTitle || ""}
            placeholder="Role Title"
            className="border p-2 rounded"
          />

          <input
            defaultValue={job?.companyName || ""}
            placeholder="Company"
            className="border p-2 rounded"
          />

          <input
            defaultValue={job?.jobLink || ""}
            placeholder="Job Link"
            className="border p-2 rounded"
          />

          <textarea
            defaultValue={job?.notes || ""}
            placeholder="Notes"
            className="border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
