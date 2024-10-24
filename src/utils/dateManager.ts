function formatDate(dateString: string | undefined | Date): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-GB", options)
    .format(date)
    .replace(/ /g, ", ");
}

function parseDate(dateString: string, format: string): Date {
  const parts = dateString.split(/[-\/]/);
  let year: number, month: number, day: number;

  switch (format) {
    case "MM/DD/YYYY":
      [month, day, year] = parts.map(Number);
      break;
    case "DD/MM/YYYY":
      [day, month, year] = parts.map(Number);
      break;
    case "YYYY-MM-DD":
      [year, month, day] = parts.map(Number);
      break;
    default:
      throw new Error("Unsupported format");
  }

  return new Date(year, month - 1, day);
}

export { formatDate, parseDate };
