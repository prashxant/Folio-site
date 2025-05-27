import GitHubCalendar from 'react-github-calendar';

function GitHubHeatmap() {
  const startDate = new Date('2024-07-30');

  const filterFromStartDate = (contributions: any) =>
    contributions.filter((day: any) => new Date(day.date) >= startDate);

  return (
    <div className="mt-4 mx-auto max-w-full px-4 sm:px-6 md:px-8 lg:px-12">
      <GitHubCalendar
        username="prashxant"
        transformData={filterFromStartDate}
      />
    </div>
  );
}

export default GitHubHeatmap;
