import Form from "next/form";
import { createJob } from "../jobs/actions";

export default function JobForm() {
  return (
    <Form action={createJob} className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="roleTitle" className="text-sm font-medium">
          Role title
        </label>
        <input
          id="roleTitle"
          name="roleTitle"
          required
          placeholder="Software Developer"
          className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="companyName" className="text-sm font-medium">
          Company
        </label>
        <input
          id="companyName"
          name="companyName"
          required
          placeholder="Unity"
          className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="jobLink" className="text-sm font-medium">
          Job link
        </label>
        <input
          id="jobLink"
          name="jobLink"
          type="url"
          placeholder="https://…"
          className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="notes" className="text-sm font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Recruiter name, referral, etc."
          className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Add job
      </button>
    </Form>
  );
}