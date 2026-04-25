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

import { useEffect, useState } from "react";
import { Job } from "@/types/job";

import JobList from "@/components/JobList";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);

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
    <JobList
      jobs={jobs}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onView={handleView}
      onStatusChange={handleStatusChange}
    />
  );
}
