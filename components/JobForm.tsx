import { Job } from "@/types/job";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (job: Partial<Job>) => Job | void;
  mode: "add" | "edit";
  job?: Job | null;
};

export default function JobFormModal({ isOpen, onClose, onSave, mode, job }: Props) {
  const [id, setId] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setId(job?.id ?? "");
    setRoleTitle(job?.roleTitle ?? "");
    setCompanyName(job?.companyName ?? "");
    setJobLink(job?.jobLink ?? "");
    setNotes(job?.notes ?? "");
  }, [job, isOpen]);

  const handleSave = () => {
    onSave({
      id: job?.id,
      roleTitle,
      companyName,
      jobLink,
      notes,
    });
  };

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
            defaultValue={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
            placeholder="Role Title"
            className="border p-2 rounded"
          />

          <input
            defaultValue={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company"
            className="border p-2 rounded"
          />

          <input
            defaultValue={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
            placeholder="Job Link"
            className="border p-2 rounded"
          />

          <textarea
            defaultValue={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            className="border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
