import { Label } from "reactstrap";
import { mount } from "enzyme";
import FieldRow from "./FieldRow";
import React from "react";

describe("FieldRender", () => {
  let props;
  let mounted;
  const render = () => {
    if (!mounted) {
      mounted = mount(<FieldRow {...props} />);
    }
    return mounted;
  };

  beforeEach(() => {
    props = {
      field: {
        name: "MyField",
        type: "text"
      }
    };
    mounted = undefined;
  });

  it("renders Label Fields", () => {
    const rendered = render();
    expect(
      rendered
        .find(Label)
        .first()
        .text()
    ).toBe("MyField");
  });
});
