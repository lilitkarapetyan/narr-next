import "./RightPanel.css";
import { CategoryType } from "../Schemas";
import { Row } from "reactstrap";
import { branch, renderComponent } from "recompose";
import CategoryRender from "./CategoryRender";
import GeneratorConfig from "./GeneratorConfig";
import NavigationPanel from "./NavigationPanel";
import PropTypes from "prop-types";
import React from "react";
import SettingsCategory from "./SettingsCategory";

const RightPanel = ({ categories, collapse, addEntry }) => (
  <React.Fragment>
    <Row
      className="justify-content-md-center "
      style={{
        padding: "10px",
        width: "100%"
      }}
    >
      <NavigationPanel collapse={collapse} />
      <GeneratorConfig collapse={collapse} />
      <SettingsCategory collapse={collapse} />
      {categories.map(category => (
        <CategoryRender
          key={category.name}
          addEntry={addEntry}
          collapse={collapse}
          category={category}
        />
      ))}
      <SettingsCategory />
    </Row>
    <div className="category-count text-center">
      Categories Count {categories.length}
    </div>
    <div
      id="txtBuildDateTime"
      style={{ position: "absolute", bottom: "10px" }}
    />
  </React.Fragment>
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
