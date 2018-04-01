import "./RightPanel.css";
import { CardColumns } from "reactstrap";
import { CategoryType } from "../Schemas";
import { branch, renderComponent } from "recompose";
import CategoryRender from "./CategoryRender";
import GeneratorConfig from "./GeneratorConfig";
import PropTypes from "prop-types";
import React from "react";
import SearchModal from "./SearchModal";

const RightPanel = ({ categories, collapse, addEntry }) => (
  <React.Fragment>
    <SearchModal addEntry={addEntry} />
    <CardColumns
      style={{
        padding: "10px",
        width: "100%",
        columnCount: collapse ? 1 : 2
      }}
    >
      <GeneratorConfig collapse={collapse} />
      {categories.map(category => (
        <CategoryRender
          key={category.name}
          addEntry={addEntry}
          collapse={collapse}
          category={category}
        />
      ))}
    </CardColumns>
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
