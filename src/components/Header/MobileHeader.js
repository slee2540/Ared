import React, { Component } from "react";
import { Link } from "react-scroll";
// import cx from "classnames";
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
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              HOME
            </li>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              ABOUT
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
              EXCHANGE SOLUTION
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
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              FOREX SOLUTION
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
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              WEB PLATFORM
            </li>
          </Link>

          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className={css.linkWidth}
          >
            <li
              className={css.linkItem}
              onClick={() => this.onChangeClick("home")}
            >
              CONTACT
            </li>
          </Link>
          {/* <li
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
          </li> */}
        </ul>
      </div>
    );
  }
}

export default MobileHeader;
