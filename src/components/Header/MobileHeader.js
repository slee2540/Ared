import React, { Component } from "react";
import { Link } from "react-scroll";
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
          <li className={css.linkItem}>
            <Link
              activeClass="active"
              to="Notice"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div onClick={() => this.onChangeClick("home")}>About</div>
            </Link>
          </li>
        </ul>
        <ul className={css.linkItemArea}>
          <li
            className={css.linkItem}
            onClick={() => this.onChangeClick("home")}
          >
            Service
          </li>
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
        </ul>
        <ul className={css.linkItemArea}>
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
            className={css.subLinkItem}
            onClick={() => this.onChangeClick("contacts")}
          >
            Contacts
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileHeader;
