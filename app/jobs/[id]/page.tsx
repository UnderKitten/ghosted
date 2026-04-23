export default async function JobPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <h1>Job Details {id}</h1>
      <p>This page will display the details of a specific job.</p>
    </div>
  );
}
