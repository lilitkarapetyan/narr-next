import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List
} from "react-virtualized";
import { debounce } from "lodash";
import Entry from "./Entry";
import PropTypes from "prop-types";
import React from "react";
import TweenOne from "rc-tween-one";

class EntryList extends React.Component {
  constructor(s) {
    super(s);
    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 50
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.entries.length !== this.props.entries.length) {
      debounce(() => {
        this.list.scrollToRow(nextProps.entries.length - 1);
      }, 100)();
    }
  }
  render() {
    const { entries, onEntryClick } = this.props;
    const rowRenderer = ({
      index, // Index of row
      // isScrolling, // The List is currently being scrolled
      // isVisible, // This row is visible within the List (eg it is not an overscanned row)
      key, // Unique key within array of rendered rows
      parent, // Reference to the parent List (instance)
      style // Style object to be applied to row (to position it);
      // This must be passed through to the rendered row element.})
    }) => {
      const entry = entries[index];
      return (
        <CellMeasurer
          cache={this.cache}
          columnIndex={0}
          key={key}
          rowIndex={index}
          parent={parent}
        >
          {({ measure }) => (
            <TweenOne
              style={{
                ...style,
                transform: "translateX(-100px)",
                opacity: "0",
                backgroundColor: "blue",
                height: "500px"
              }}
              animation={[
                {
                  x: 10,
                  opacity: "1",
                  backgroundColor: "rgba(128,223,225,0.3)"
                },
                {
                  backgroundColor: "transparent"
                }
              ]}
            >
              <div>
                <Entry
                  entry={entry}
                  onClick={() => onEntryClick(index)}
                  measure={() => {
                    measure();
                    this.cache.clear(index);
                  }}
                />
              </div>
            </TweenOne>
          )}
        </CellMeasurer>
      );
    };

    return (
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={list => {
              this.list = list;
            }}
            deferredMeasurementCache={this.cache}
            rowHeight={this.cache.rowHeight}
            width={width}
            height={height}
            rowCount={entries.length}
            rowRenderer={rowRenderer}
            overScan={10}
          />
        )}
      </AutoSizer>
    );
  }
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      selected: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      created: PropTypes.object.isRequired,
      mType: PropTypes.string.isRequired,
      privacy: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onEntryClick: PropTypes.func.isRequired
};

export default EntryList;
