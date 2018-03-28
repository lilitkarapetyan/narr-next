import { Input } from "reactstrap";
import { mount } from "enzyme";
import InputSelector from "./index";
import React from "react";

// TODO(moura) :  This suite only check if the input actually exists,
// it does not test wheter the input is correctly assigned,
// and wheter calling the onChange method will trigger the value to change

describe("InputSelector", () => {
  let props;
  let mounted;
  const render = () => {
    if (!mounted) {
      mounted = mount(<InputSelector {...props} />);
    }
    return mounted;
  };

  beforeEach(() => {
    props = {
      type: "text",
      values: {},
      onChange: () => null
    };
    mounted = undefined;
  });

  it("has text input", () => {
    props.type = "text";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });

  it("has angle input ", () => {
    props.type = "angle";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });

  it("has speed input ", () => {
    props.type = "speed";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });

  it("has distance input ", () => {
    props.type = "distance";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });
  it("has integer input ", () => {
    props.type = "integer";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });
  it("has frequency input ", () => {
    props.type = "frequency";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });
  it("has location input ", () => {
    props.type = "location";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(2);
  });
  it("has octas input ", () => {
    props.type = "octas";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });

  it("has wind-state input ", () => {
    props.type = "wind-state";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });

  it("has Day/Night input ", () => {
    props.type = "day-night";
    const rendered = render();
    expect(rendered.find(Input)).toHaveLength(1);
  });
});
