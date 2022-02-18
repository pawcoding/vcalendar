import { v4 as uuidv4 } from "uuid";

export class Appointment {
  uid: string;
  stamp: Date;
  start: Date;
  end: Date;
  summary: string;
  description: string;
  location: string;

  constructor(
    uid: string,
    stamp: Date,
    start: Date,
    end: Date,
    summary: string,
    description: string,
    location: string
  ) {
    this.uid = uid;
    this.stamp = stamp;
    this.start = start;
    this.end = end;
    this.summary = summary;
    this.description = description;
    this.location = location;
  }

  static example(): Appointment {
    return new Appointment(
      uuidv4(),
      new Date(),
      new Date(Date.now() + 60 * 1000),
      new Date(Date.now() + 2 * 60 * 60 * 1000),
      "Example",
      "Example Description",
      "Here"
    );
  }

  toString(): string {
    return (
      "BEGIN:VEVENT\n" +
      `UID:${this.uid}\n` +
      `DTSTAMP:${timestamp(this.stamp)}\n` +
      `DTSTART:${timestamp(this.start)}\n` +
      `DTEND:${timestamp(this.end)}\n` +
      `SUMMARY:${this.summary.replace(/,/g, ",")}\n` +
      `DESCRIPTION:${this.description.replace(/,/g, ",")}\n` +
      `LOCATION:${this.location.replace(/,/g, ",")}\n` +
      "CLASS:PUBLIC\n" +
      "END:VEVENT"
    );
  }
}

function timestamp(date: Date): string {
  return date.toISOString().replace(/[-|:]/g, "").substring(0, 15) + "Z";
}
