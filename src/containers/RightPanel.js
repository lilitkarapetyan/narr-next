import { addEntry } from "../actions";
import { connect } from "react-redux";
import RightPanel from "../components/RightPanel";

export default connect(null, { addEntry })(RightPanel);
