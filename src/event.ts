export class Event {

  constructor(
    private uid: string,
    private stamp: Date,
    private start: Date,
    private end: Date,
    private summary: string
  ) {
  }

  toICalString(): string {
    console.log(this.toString());
    return this.toString();
  }

  toString(): string {
    return "BEGIN:VEVENT\n" +
      `DTSTAMP:${timestamp(this.stamp)}\n` +
      `DTSTART:${timestamp(this.start)}\n` +
      `DTEND:${timestamp(this.end)}\n` +
      `SUMMARY:${this.summary}\n` +
      "END:VEVENT";
  }

}

function timestamp(date: Date): string {
  return date.toISOString()
    .replace(/[-|:]/g, "")
    .substring(0, 15) + "Z";
}