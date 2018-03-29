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
      onSubmit: () => null,
      toggleModal: () => false,
      modalVisible: false,
      setValues: () => false,
      values: {}
    };
    mountedEntryModal = undefined;
  });

  it("renders ONE button", () => {
    const rendered = render();
    expect(rendered.find(Button)).toHaveLength(1);
  });

  it("adds Entry on Submit", () => {
    const mockEntry = jest.fn();
    props.onSubmit = mockEntry;
    props.values = {
      one: "one"
    };
    const rendered = render();
    rendered
      .find("EntryRender")
      .props()
      .onSubmit();
    expect(mockEntry.mock.calls).toHaveLength(1);
  });

  it("adds correct entry format on Submit", () => {
    const mockEntry = jest.fn();
    props.onSubmit = mockEntry;
    props.values = {
      hello: "one",
      two: "two"
    };
    const rendered = render();
    rendered
      .find("EntryRender")
      .props()
      .onSubmit();
    expect(mockEntry.mock.calls[0][0].fields.hello).toBe("one");
    expect(mockEntry.mock.calls[0][0].fields.two).toBe("two");
    expect(mockEntry.mock.calls[0][0].mType).toBe("myId");

    // expect(mockEntry.mock.calls[0][0]).toBe("myEntry");
    // expect(mockEntry.mock.calls[0][0]).toBe("public");
  });

  it("renders Entry Name on Button", () => {
    const rendered = render();
    expect(rendered.find(Button).text()).toEqual(props.entry.name);
  });

  it("to call Toggle Dialog on Click", () => {
    const modalToggleMock = jest.fn();
    props.toggleModal = modalToggleMock;
    props.setModalVisible = jest.fn();
    const rendered = render();
    rendered.find(Button).prop("onClick")();
    expect(props.setModalVisible.mock.calls.length).toBe(1);
  });
});
