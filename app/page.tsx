"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Job = {
  id: string;
  roleTitle: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  status: string;
};

const statusColors: Record<string, string> = {
  APPLIED: "bg-gray-800",
  INTERVIEW: "bg-blue-900",
  OFFER: "bg-green-900",
  REJECTED: "bg-red-900",
  GHOSTED: "bg-yellow-900",
};

const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED", "GHOSTED"];

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const jobsElement = jobs.map((job) => (
    <div
      key={job.id}
      className={`flex items-center gap-4 p-3 rounded-xl text-sm ${statusColors[job.status]}`}
    >
      <span className="font-medium w-1/5">{job.roleTitle}</span>

      <span className="text-gray-300 w-1/5">{job.companyName}</span>

      <select
        defaultValue={job.status}
        className="border border-gray-600 bg-gray-800 text-white rounded px-2 py-1 w-1/6"
        onChange={(e) => handleStatusChange(job.id, e.target.value)}
      >
        {STATUS_OPTIONS.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <span className="text-gray-400 w-1/6">
        {new Date(job.createdAt).toLocaleDateString()}
      </span>

      <span className="text-gray-400 w-1/6">
        {new Date(job.updatedAt).toLocaleDateString()}
      </span>

      <div className="flex gap-2 ml-auto">
        <button
          onClick={() => handleView(job)}
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded"
        >
          View Posting
        </button>
        <button
          onClick={() => handleEdit(job)}
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(job.id)}
          className="px-2 py-1 bg-red-700 hover:bg-red-600 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center sm:text-left">
          Welcome to Ghosted!
        </h1>
        <form className="w-full mt-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Role Title"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Add Job
          </button>
        </form>
        <div className="mt-10 w-full grid grid-cols-1 gap-4">{jobsElement}</div>
        <p className="mt-3 text-2xl text-center sm:text-left">
          A simple, open-source, job application tracking page.
        </p>
      </main>
    </div>
  );
}
