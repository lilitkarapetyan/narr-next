import { mount } from "enzyme";
import EntryFormRender from "./EntriesForm";
import FieldRow from "./FieldRow";
import React from "react";

describe("EntryFormRender", () => {
  let props;
  let mounted;
  const render = () => {
    if (!mounted) {
      mounted = mount(<EntryFormRender {...props} />);
    }
    return mounted;
  };

  beforeEach(() => {
    props = {
      fields: [
        {
          name: "myFirstField",
          type: "text"
        }
      ],
      values: {},
      saveValue: () => null
    };
    mounted = undefined;
  });

  it("renders All Fields", () => {
    const rendered = render();
    expect(rendered.find(FieldRow)).toHaveLength(props.fields.length);
  });
});
