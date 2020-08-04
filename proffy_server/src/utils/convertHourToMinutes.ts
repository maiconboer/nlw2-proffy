export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const timeUmMinutes = (hour * 60) + minutes;

  return timeUmMinutes;
}