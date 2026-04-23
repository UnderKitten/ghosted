import { prisma } from "../lib/prisma";

async function main() {
  const user = await prisma.job.create({
    data: {
      roleTitle: "Software Engineer",
      companyName: "Tech Company",
      jobLink: "https://techcompany.com/jobs/software-engineer",
    },
  });
  console.log("Created job:", user);

  // Fetch all jobs with their posts
  const allUsers = await prisma.job.findMany();
  console.log("All jobs:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
