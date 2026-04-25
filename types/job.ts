export type JobStatus =
  | "APPLIED"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED"
  | "GHOSTED";

export type Job = {
  id: string;
  roleTitle: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  status: JobStatus;
};

export const STATUS_OPTIONS: JobStatus[] = [
  "APPLIED",
  "INTERVIEW",
  "OFFER",
  "REJECTED",
  "GHOSTED",
];

export const statusColors: Record<JobStatus, string> = {
  APPLIED: "bg-gray-800",
  INTERVIEW: "bg-blue-900",
  OFFER: "bg-green-900",
  REJECTED: "bg-red-900",
  GHOSTED: "bg-yellow-900",
};