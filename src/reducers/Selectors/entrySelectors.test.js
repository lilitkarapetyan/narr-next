import { entryTypes } from "./entrySelectors";

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

  it("picks correct types number", () => {
    const result = entryTypes(state);
    expect(result).toHaveLength(2);
  });

  it("picks correct types", () => {
    const result = entryTypes(state);
    expect(result).toEqual(expect.arrayContaining(["test", "otherTest"]));
  });
});
