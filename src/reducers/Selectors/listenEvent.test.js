import { listenEvent } from "./listenEvent";

describe("Selectors ", () => {
  let state = {
    entries: []
  };

  beforeEach(() => {
    state = {};
    state.entries = [
      {
        mType: "test",
        created: "2018-03-29T19:03:16Z"
      },
      {
        mType: "test",
        created: "2018-03-30T19:03:16Z"
      },
      {
        mType: "otherTest",
        created: "2018-03-29T19:03:16Z"
      }
    ];
  });

  it("picks type correctly", () => {
    const result = listenEvent("test")(state);
    expect(result.mType).toBe("test");
  });

  it("picks latest correctly", () => {
    const result = listenEvent("test")(state);
    expect(result.created).toBe("2018-03-30T19:03:16Z");
  });
});
