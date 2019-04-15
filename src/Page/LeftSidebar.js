import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";
import css from "./leftsidebar.module.css";

class LeftSidebar extends Component {
  onSideClick = item => () => {
    const { selected, selectedView } = this.props;

    if (item !== selected) {
      selectedView(item);
    }
  };

  createSelectedClass = (type, isAllow = true) => {
    const { selected } = this.props;
    return cx({
      [css.selectedItem]: selected === type,
      [css.unselectedItem]: selected !== type,
      [css.notAloowItem]: !isAllow,
      [css.suffixColor]: selected !== type
    });
  };

  render() {
    const { onSideClick, createSelectedClass } = this;

    return (
      <div className={css.wrapper}>
        <ul className={css.ulWrapper}>
          <li
            className={createSelectedClass("notice")}
            onClick={onSideClick("notice")}
          >
            {"Notice"}
          </li>
          <li
            className={createSelectedClass("contacts")}
            onClick={onSideClick("contacts")}
          >
            {"Contacts"}
          </li>
        </ul>
      </div>
    );
  }
}

LeftSidebar.propTypes = {
  history: PropTypes.object,
  selected: PropTypes.string
};

LeftSidebar.defaultProps = {
  history: null,
  selected: "notice" // notice,contacts
};

export default LeftSidebar;
