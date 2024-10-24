function appendLocalEntry(id: string): void {
  const storageKey = "ids";
  const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  // Retrieve existing data from localStorage
  const storedData = localStorage.getItem(storageKey);
  let idsArray = storedData ? JSON.parse(storedData) : [];

  // Filter out entries older than one week
  idsArray = idsArray.filter((entry: { id: string; timestamp: number }) => {
    return now - entry.timestamp < oneWeekInMillis;
  });

  // Append the new ID with the current timestamp
  idsArray.push({ id, timestamp: now });

  // Save the updated array back to localStorage
  localStorage.setItem(storageKey, JSON.stringify(idsArray));
}

function getAllLocalEntries(history: number = 7): string[] {
  const storageKey = "ids";
  const oneDayInMillis = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const historyInMillis = history * oneDayInMillis;

  const storedData = localStorage.getItem(storageKey);
  const idsArray = storedData ? JSON.parse(storedData) : [];

  // Filter entries that are within the specified history days
  const filteredIds = idsArray.filter(
    (entry: { id: string; timestamp: number }) => {
      return now - entry.timestamp <= historyInMillis;
    },
  );

  return filteredIds.map(
    (entry: { id: string; timestamp: number }) => entry.id,
  );
}

export { appendLocalEntry, getAllLocalEntries };
