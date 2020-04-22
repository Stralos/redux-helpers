import { payload } from "../payload";

describe("payload", () => {
  it("should return correct object", () => {
    const fn = payload<{ name: string }>();
    const user = { name: "james" };
    const result = fn(user);
    expect(result).toMatchObject(user);
  });
});
