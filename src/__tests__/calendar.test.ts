import { Calendar } from "../calendar";

test("Calendar", () => {
  expect(new Calendar()).not.toBeNull();

  expect(Calendar.example().toString()).not.toBeNull();
  //.toMatch(new RegExp(`^BEGIN:VCALENDAR(?s).*END:VCALENDAR`, "gm"))
});
