import React from "react";
import { Row, Col } from "reactstrap";
import { branch, renderComponent } from "recompose";
import CategoryRender from "./CategoryRender";
import "./RightPanel.css";

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

const EmptyCategories = () => <div> No categories </div>;

const enhancer = branch(
  ({ categories }) => categories && categories.length > 0,
  renderComponent(LeftPanel),
  renderComponent(EmptyCategories)
);

export default enhancer(LeftPanel);
