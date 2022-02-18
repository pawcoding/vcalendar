import { Event } from "../event";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

test("Event", () => {
  expect(new Event(uuidv4(), new Date(), new Date(), new Date(), "Testevent"))
    .not.toBeNull();

  expect(new Event(uuidv4(), new Date(), new Date(), new Date(), "Testevent").toICalString())
    .not.toBeNull();
  //.toMatch(new RegExp(`^BEGIN:VEVENT(?s).*END:VEVENT$`, "gm"))
});