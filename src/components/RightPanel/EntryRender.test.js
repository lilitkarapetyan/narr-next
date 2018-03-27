import { Button } from "reactstrap";
import { EntryRenderUnControlled as EntryRender } from "./EntryRender";
import { mount } from "enzyme";
import React from "react";

describe("EntryRender", () => {
  let props;
  let mountedEntryModal;
  const render = () => {
    if (!mountedEntryModal) {
      mountedEntryModal = mount(<EntryRender {...props} />);
    }
    return mountedEntryModal;
  };

  beforeEach(() => {
    props = {
      entry: {
        id: "myId",
        name: "myEntry",
        priority: "High",
        fields: []
      },
      toggleModal: () => false,
      modalVisible: false
    };
    mountedEntryModal = undefined;
  });

  it("renders ONE button", () => {
    const rendered = render();
    expect(rendered.find(Button)).toHaveLength(1);
  });

  it("renders Entry Name on Button", () => {
    const rendered = render();
    expect(rendered.find(Button).text()).toEqual(props.entry.name);
  });

  it("to call Toggle Dialog on Click", () => {
    const modalToggleMock = jest.fn();
    props.toggleModal = modalToggleMock;
    const rendered = render();
    rendered.find(Button).prop("onClick")();
    expect(modalToggleMock.mock.calls.length).toBe(1);
  });
});
