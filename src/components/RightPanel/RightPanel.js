import "./RightPanel.css";
import { Row } from "reactstrap";
import { branch, renderComponent } from "recompose";
import CategoryRender from "./CategoryRender";
import PropTypes from "prop-types";
import React from "react";

const LeftPanel = ({ categories, collapse }) => (
  <div className="category-container">
    <Row
      className="justify-content-md-center"
      style={{ padding: "10px", width: "100%" }}
    >
      {categories.map(category => (
        <CategoryRender collapse={collapse} category={category} />
      ))}
    </Row>
    <div className="category-count text-center">
      Categories Count {categories.length}
    </div>
  </div>
);

LeftPanel.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  collapse: PropTypes.bool.isRequired
};

LeftPanel.defaultProps = {
  categories: []
};
const EmptyCategories = () => <div> No categories </div>;

const enhancer = branch(
  ({ categories }) => categories && categories.length > 0,
  renderComponent(LeftPanel),
  renderComponent(EmptyCategories)
);

export default enhancer(LeftPanel);
