"use client";
export default function ArchiveError({ error }: { error: Error }) {
  return (
    <div id="error">
      <h1>Invalid filter</h1>
      <p>{error.message}</p>
    </div>
  );
}
