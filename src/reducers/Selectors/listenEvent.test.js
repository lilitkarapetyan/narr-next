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
        created: "2018-03-29T19:03:16Z",
        status: "completed"
      },
      {
        mType: "test",
        created: "2018-03-30T19:03:16Z",
        status: "completed"
      },

      {
        mType: "otherTest",
        created: "2018-03-29T19:03:16Z",
        status: "completed"
      }
    ];
  });

  it("picks only completed tasks", () => {
    state.entries = [
      {
        mType: "test",
        created: "2018-03-30T50:03:16Z",
        status: ""
      }
    ];
    const result = listenEvent("test")(state);
    expect(result).toHaveLength(0);
  });

  it("picks type correctly", () => {
    const result = listenEvent("test")(state);
    expect(result.mType).toBe("test");
  });

  it("picks latest correctly", () => {
    const result = listenEvent("test")(state);
    expect(result.created).toBe("2018-03-30T19:03:16Z");
  });

  it("accepts filter function and picks correctly", () => {
    const result = listenEvent(ent => ent.mType === "otherTest")(state);
    expect(result.created).toBe("2018-03-29T19:03:16Z");
  });
});
