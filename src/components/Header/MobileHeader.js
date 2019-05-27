import React, { Component } from "react";
import { Link } from "react-scroll";
import cx from "classnames";
import css from "../main.module.css";

// import { IoMdMenu } from "react-icons/io"; //burger모양 작업

class MobileHeader extends Component {
  onChangeClick = id => {
    const { selectedView, pageView, outsideClick } = this.props;
    if (pageView !== id) {
      selectedView(id);
      outsideClick();
    } else {
      outsideClick();
    }
  };

  render() {
    const { outsideClick } = this.props;
    return (
      <div onClick={outsideClick} className={css.mobileHeaderWrapper}>
        <ul className={css.linkItemArea}>
          <Link
            activeClass="active"
            to="Notice"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              About
            </li>
          </Link>
          <Link
            activeClass="active"
            to="ExchangeSolution"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              Service
            </li>
          </Link>
          <Link
            activeClass="active"
            to="ExchangeSolution"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.subLinkItem}
              onClick={() => this.onChangeClick("home")}
            >
              Exchange Solution
            </li>
          </Link>
          <Link
            activeClass="active"
            to="ForexSolution"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.subLinkItem}
              onClick={() => this.onChangeClick("home")}
            >
              Forex Solution
            </li>
          </Link>
          <Link
            activeClass="active"
            to="WebPlatform"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.subLinkItem}
              onClick={() => this.onChangeClick("home")}
            >
              Web Platform
            </li>
          </Link>
          <li
            className={css.linkItem}
            onClick={() => this.onChangeClick("notice")}
          >
            Support
          </li>
          <li
            className={css.subLinkItem}
            onClick={() => this.onChangeClick("notice")}
          >
            Notice
          </li>
          <li
            className={cx(css.subLinkItem, css.linkItemAreaLastLi)}
            onClick={() => this.onChangeClick("contacts")}
          >
            Contacts
          </li>
        </ul>
        {/* <ul className={css.linkItemArea}>
          
        </ul>
        <ul className={css.linkItemArea}>
          
        </ul> */}
      </div>
    );
  }
}

export default MobileHeader;
