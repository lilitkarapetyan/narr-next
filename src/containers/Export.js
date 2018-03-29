import { connect } from "react-redux";
import { getVisibleEntries } from "./VisibleEntryList";
import ExportCard from "../components/ExportCard";

const lineLength = 80;
const maxLines = 36;

const groupEntries = state => {
  let entries = getVisibleEntries(
    state.entries,
    state.visibilityFilter,
    state.privacyFilter,
    state.timeFilter
  );

  entries = entries.map(entry => {
    const output = entry;
    output.linePoint = 2;
    if (output.text) {
      output.linePoint += Math.ceil(output.text.length / lineLength);
    }
    return output;
  });

  const pages = [];

  for (let i = 0, line = 0, pageInd = 0; i < entries.length; i++) {
    if (!pages[pageInd]) pages[pageInd] = [];

    pages[pageInd].push(entries[i]);
    line += entries[i].linePoint;

    if (entries[i + 1] && entries[i + 1].linePoint + line > maxLines) {
      pageInd++;
      line = 0;
    }
  }

  return pages;
};

const mapStateToProps = state => ({
  entries: groupEntries(state)
});

const Export = connect(mapStateToProps)(ExportCard);

export default Export;
