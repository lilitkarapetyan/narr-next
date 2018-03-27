import { Input, Label } from "reactstrap";
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
      },
      value: "",
      onChange: () => null
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

  it("calls onChange", () => {
    const onChange = jest.fn();
    props.onChange = onChange;
    const rendered = render();
    rendered
      .find(Input)
      .first()
      .prop("onChange")({ target: { value: "hello" } });
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe("hello");
  });
});
