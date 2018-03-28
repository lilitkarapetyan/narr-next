import { WrapStore } from "../../TestUtils";
import { mount } from "enzyme";
import EntryFormRender from "./EntriesForm";
import FieldRow from "./FieldRow";
import React from "react";
import Validator from "../../Validator";

describe("EntryForm", () => {
  let props;
  let mounted;
  const render = () => {
    if (!mounted) {
      mounted = mount(
        <WrapStore>
          <EntryFormRender {...props} />
        </WrapStore>
      );
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
      saveValue: () => null,
      validator: Validator()
    };
    mounted = undefined;
  });

  it("renders All Fields", () => {
    const rendered = render();
    expect(rendered.find(FieldRow)).toHaveLength(props.fields.length);
  });

  it("renders with empty values", () => {
    props.values = null;
    render();
  });
});
