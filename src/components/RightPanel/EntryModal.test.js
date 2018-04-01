import { ModalHeader } from "reactstrap";
import { WrapStore } from "../../TestUtils";
import { mount } from "enzyme";
import EntryModal from "./EntryModal";
import React from "react";

describe("EntryModal", () => {
  let props = {
    entry: { id: "mockid" }
  };
  let mounted;
  const render = () => {
    if (!mounted) {
      mounted = mount(
        <WrapStore>
          <EntryModal {...props} />
        </WrapStore>
      );
    }
    return mounted;
  };

  beforeEach(() => {
    props = {
      entry: null,
      values: null,
      setValue: () => null
    };
    mounted = undefined;
  });

  it("renders inlined without header", () => {
    props.entry = {
      fields: [
        {
          type: "text",
          name: "name"
        },
        {
          type: "text",
          name: "otherName"
        }
      ]
    };
    props.inline = true;
    const rendered = render();

    expect(rendered.find(ModalHeader)).toHaveLength(0);
  });

  it("renders with empty values", () => {
    props.values = null;
    render();
  });
});
