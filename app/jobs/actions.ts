import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createJob(formData: FormData) {
  "use server";
  const roleTitle = String(formData.get("roleTitle") ?? "");
  const companyName = String(formData.get("companyName") ?? "");
  if (!roleTitle || !companyName) {
    throw new Error("Role and company are required");
  }
  const notes = formData.get("notes") as string | null;
  const jobLink = formData.get("jobLink") as string | null;

  const job = await prisma.job.create({
    data: {
      roleTitle,
      companyName,
      notes,
      jobLink,
    },
  });

  revalidatePath("/jobs");
}

export async function deleteJob(formData: FormData) {
    "use server"
  const id = Number(formData.get("id") ?? "");

  await prisma.job.delete({
    where: {
      id,
    },
  });
  revalidatePath("/jobs");
}
