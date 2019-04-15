import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import css from "./board.module.css";

class BoardItem extends Component {
  render() {
    const { content } = this.props;
    console.log(content);
    return (
      <div className={css.content}>
        <div className={css.contentRow}>
          <p>{ReactHtmlParser(content)}</p>
          <br />
        </div>
      </div>
    );
  }
}

BoardItem.propTypes = {
  content: PropTypes.string,
  attachment: PropTypes.array,
  answer: PropTypes.string,
  isQna: PropTypes.bool
};

BoardItem.defaultProps = {
  content: "",
  attachment: [],
  answer: "",
  isQna: false
};

export default BoardItem;
