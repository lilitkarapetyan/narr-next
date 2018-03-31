import { Col, Modal, Row } from "reactstrap";
import { compose, withState } from "recompose";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Fuse from "fuse-js-latest";
import Hotkeys from "react-hot-keys";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  && {
    position: relative;
    padding: 20px;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.7);

    max-width: 80%;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

    -webkit-transform: translate(0px, -100%) scale(0, 0);
    -moz-transform: translate(0px, -100%) scale(0, 0);
    -o-transform: translate(0px, -100%) scale(0, 0);
    -ms-transform: translate(0px, -100%) scale(0, 0);
    transform: translate(0px, -100%) scale(0, 0);
    overflow-y: hidden;
    opacity: 1;

    > .modal-content {
      background-color: transparent;
    }
  }
`;

const SearchBox = styled.input`
  position: relative;
  top: ${props => (props.results.length > 0 ? "80px" : "100px")};
  width: 100%;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0);
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  border: 0px;
  margin: 0px auto;
  margin-top: -20px;
  padding-left: 30px;
  padding-right: 30px;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    text-shadow: 0px 0px 0px white;
    color: transparent;
  }
`;

const SearchResultsContainer = styled(Row)`
  margin-top: 95px;
  width: 100%;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0);
  padding: 30px;
`;

const getConfig = state => state.ui.config;

const SearchSelector = search =>
  search
    ? createSelector([getConfig], config => {
        const options = {
          shouldSort: true,
          tokenize: true,
          matchAllTokens: true,
          threshold: 0.2,
          location: 0,
          distance: 10,
          maxPatternLength: 32,
          minMatchCharLength: 5,
          keys: ["name", "mType", "category"]
        };
        const ndata = [];
        config.categories.map(cat =>
          cat.entries.map(x =>
            ndata.push({
              ...x,
              category: cat.name
            })
          )
        );
        const fuse = new Fuse(ndata || [], options);
        const result = fuse.search(search || "");
        return result;
      })
    : () => [];

const ResultsLabel = styled.div`
  position: relative;
  top:  8px;
  font-size : ${props => (props.results.length ? "10px" : "18px")}
  width: 100%;
  color: rgb(255, 255, 255);
  color : rgba(255,255,255,0.6);
  background: rgba(0, 0, 0, 0);
  font-weight: 300;
  text-align: center;
  border: 0px;
  margin: 0px auto;
  margin-top: -20px;
  padding-left: 30px;
  padding-right: 30px;
  outline: none;
  margin-bottom :20px;
  transition: all 0.3s ease-in-out;
`;

const FieldStyle = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
`;

const Category = styled.p`
  color: rgba(90, 150, 200, 0.6);
  margin-bottom: 2px;
`;

const Result = styled(Col)`
  background-color: ${props =>
    props.selected ? "rgba(255, 255, 255, 0.3)" : "transparent"} !important;
  transition: all 0.3s ease-in;
  border-radius: 10px;
  padding: 15px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

class SearchModal extends React.Component {
  componentDidUpdate() {
    if (document.getElementById("fast-search"))
      document.getElementById("fast-search").focus();
  }
  render() {
    const {
      open,
      setOpen,
      setSearch,
      results,
      addEntry,
      index,
      setIndex
    } = this.props;
    return (
      <div>
        <Hotkeys
          keyName="ctrl+g"
          onKeyDown={(_, e) => {
            e.preventDefault();

            setOpen(true);
          }}
        />

        <StyledModal isOpen={open} toggle={() => setOpen(!open)}>
          <Hotkeys
            keyName="enter"
            onKeyDown={(_, e) => {
              e.preventDefault();
              let idx = index;
              if (results.length === 1) {
                idx = 0;
              }
              const res = results[idx];
              const fields = {};
              res.fields.forEach(key => {
                fields[key.name] = "";
              });
              const entry = {
                name: res.name,
                mType: res.id,
                category: res.category,
                fields
              };
              addEntry(entry);
              setOpen(false);
            }}
          />
          <Hotkeys
            keyName="left"
            onKeyDown={(_, e) => {
              e.preventDefault();
              let idx = (index - 1) % results.length - 1;
              if (idx < 0) idx = results.length - 1;
              setIndex(idx);
            }}
          />
          <Hotkeys
            keyName="right"
            onKeyDown={(_, e) => {
              e.preventDefault();

              setIndex((index + 1) % results.length);
            }}
          />
          <SearchBox
            id="fast-search"
            results={results}
            ref={s => {
              this.search = s;
            }}
            placeholder="Start typing to search for entries"
            onChange={evt => {
              setSearch(evt.target.value);
              setIndex(0);
            }}
          />

          <SearchResultsContainer>
            <ResultsLabel results={results}>
              {results.length === 0
                ? "No results found"
                : `Found ${results.length} matching your search`}
            </ResultsLabel>

            {results.map((res, idx) => (
              <Result
                selected={index === idx}
                onMouseEnter={() => setIndex(idx)}
                onClick={() => {
                  const fields = {};
                  res.fields.forEach(key => {
                    fields[key.name] = "";
                  });
                  const entry = {
                    name: res.name,
                    mType: res.id,
                    category: res.category,
                    fields
                  };
                  addEntry(entry);
                  setOpen(false);
                }}
              >
                <h6>
                  <Category> {res.category} </Category>
                  {res.id}
                </h6>
                {res.fields.map(field => (
                  <FieldStyle>
                    {field.name} : {field.type}
                  </FieldStyle>
                ))}
              </Result>
            ))}
          </SearchResultsContainer>
        </StyledModal>
      </div>
    );
  }
}

SearchModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  results: PropTypes.array,
  addEntry: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
};

const enhancer = compose(
  withState("index", "setIndex", -1),
  withState("search", "setSearch", null),
  connect((state, ownProps) => ({
    results: SearchSelector(ownProps.search)(state)
  })),
  withState("open", "setOpen", false)
);
export default enhancer(SearchModal);
