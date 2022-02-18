import { Appointment } from "./appointment";

export class Calendar {
  appointments: Appointment[] = [];

  static example(): Calendar {
    const example = new Calendar();
    example.appointments.push(Appointment.example());
    return example;
  }

  toString(): string {
    return (
      "BEGIN:VCALENDAR\n" +
      "VERSION:2.0\n" +
      `PRODID:vcalendar\n` +
      "METHOD:PUBLISH\n" +
      `${this.appointments.map((e) => e.toString()).join("\n")}\n` +
      "END:VCALENDAR"
    );
  }
}
