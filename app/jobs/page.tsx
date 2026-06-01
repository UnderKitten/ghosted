"use client";
const mockJobs: Job[] = [
  {
    id: "1",
    roleTitle: "Software Engineer",
    companyName: "Google",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "APPLIED",
  },
  {
    id: "2",
    roleTitle: "Product Manager",
    companyName: "Facebook",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "INTERVIEW",
  },
  {
    id: "3",
    roleTitle: "Data Scientist",
    companyName: "Amazon",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "OFFER",
  },
];

import { useState } from "react";
import { Job } from "@/types/job";

import JobRow from "@/components/JobRow";
import JobFormModal from "@/components/JobForm";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleDelete = (id: string) => {
    console.log("delete", id);
  };

  const handleEdit = (job: Job) => {
    console.log("edit", job);
  };

  const handleView = (job: Job) => {
    console.log("view", job);
  };

  const handleStatusChange = (id: string, status: string) => {
    console.log("status change", id, status);
  };

  // useEffect(() => {
  //   fetch("/api/jobs")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);

  return (
    <>
      <div className="w-full">
        <div className="mb-4 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            placeholder="Search jobs..."
            className="text-center md:w-1/3 px-3 py-2 rounded bg-gray-800"
          />
          <button
            onClick={() => {
              setMode("add");
              setSelectedJob(null);
              setIsModalOpen(true);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            + Add
          </button>
        </div>

        <div className="hidden md:grid grid-cols-5 gap-4 px-4 py-2 text-sm text-gray-400">
          <p>Company / Role</p>
          <p>Status</p>
          <p>Applied</p>
          <p>Updated</p>
          <p className="text-left">Actions</p>
        </div>

        <div className="flex flex-col gap-3">
          {jobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onView={handleView}
              onStatusChange={handleStatusChange}
              setMode={setMode}
              setSelectedJob={setSelectedJob}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <JobFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={mode}
        job={selectedJob}
      />
    </>

    // <JobList
    //   jobs={jobs}
    //   onDelete={handleDelete}
    //   onEdit={handleEdit}
    //   onView={handleView}
    //   onStatusChange={handleStatusChange}
    // />
  );
}
