import "./RightPanel.css";
import { CategoryType } from "../Schemas";
import { Row } from "reactstrap";
import { branch, renderComponent } from "recompose";
import CategoryRender from "./CategoryRender";
import PropTypes from "prop-types";
import React from "react";

const RightPanel = ({ categories, collapse, addEntry }) => (
  <div className="category-container">
    <Row
      className="justify-content-md-center "
      style={{ padding: "10px", width: "100%" }}
    >
      {categories.map(category => (
        <CategoryRender
          key={category.name}
          addEntry={addEntry}
          collapse={collapse}
          category={category}
        />
      ))}
    </Row>
    <div className="category-count text-center">
      Categories Count {categories.length}
    </div>
  </div>
);

RightPanel.propTypes = {
  categories: PropTypes.arrayOf(CategoryType),
  collapse: PropTypes.bool.isRequired,
  addEntry: PropTypes.func.isRequired
};

RightPanel.defaultProps = {
  categories: []
};

const EmptyCategories = () => <div> No categories </div>;

const enhancer = branch(
  ({ categories }) => categories && categories.length > 0,
  renderComponent(RightPanel),
  renderComponent(EmptyCategories)
);

export default enhancer(RightPanel);
