import { Appointment } from "../appointment";
import { v4 as uuidv4 } from "uuid";

test("Appointment", () => {
  expect(
    new Appointment(uuidv4(), new Date(), new Date(), new Date(), "Testevent", "Test Description", "There")
  ).not.toBeNull();

  expect(Appointment.example().toString()).not.toBeNull();
  //.toMatch(new RegExp(`^BEGIN:VEVENT(?s).*END:VEVENT$`, "gm"))
});
