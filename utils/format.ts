export function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60); // Hitung jam
  const remainingMinutes = minutes % 60; // Hitung sisa menit
  return `${hours}h ${remainingMinutes}m`;
}
