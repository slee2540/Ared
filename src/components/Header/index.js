import React, { Component } from "react";
import cx from "classnames";
import { Link } from "react-scroll";
// import { Link as Move } from "react-router-dom";
import { IoMdMenu } from "react-icons/io"; //burger모양 작업
import Dropdown from "../Dropdown/index";
import css from "../main.module.css";
import MobileHeader from "./MobileHeader";

class Header extends Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
  }

  state = {
    isShowNavigation: false
  };

  onChangeClick = id => {
    const { selectedView } = this.props;
    selectedView(id);
  };

  clickMenu = () => {
    const { isShowNavigation } = this.state;
    this.setState({
      isShowNavigation: !isShowNavigation
    });
  };

  front_pc = () => {
    return (
      <div className={css.headerWrapper}>
        <div className={css.headerLayout1}>
          <div onClick={() => this.onChangeClick("home")}>
            <img
              className={css.headerLogo}
              src={`/img/ARED-LOGO-temp.png`}
              alt="ARED-LOGO"
            />
          </div>
        </div>
        <div className={css.headerLayout2}>
          <div className={css.aboutBtn}>
            <Link
              activeClass="active"
              to="Notice"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div onClick={() => this.onChangeClick("home")}>About</div>
            </Link>
          </div>
          <Dropdown ref={this.dropdown} childrenClassName={css.dropdown1}>
            <div
              className={cx(css.menuContent, css.menuContentHover)}
              onClick={() => this.onChangeClick("home")}
            >
              Service
            </div>
            <div className={css.menuWrapper}>
              <div className={css.menuPadding}>
                <Link
                  activeClass="active"
                  to="ExchangeSolution"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <div onClick={() => this.onChangeClick("home")}>
                    Exchange Solution
                  </div>
                </Link>
              </div>
              <div
                className={css.menuPadding}
                onClick={() => this.onChangeClick("home")}
              >
                <Link
                  activeClass="active"
                  to="ForexSolution"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <div onClick={() => this.onChangeClick("home")}>
                    Forex Solution
                  </div>
                </Link>
              </div>
              <div
                className={css.menuPadding}
                onClick={() => this.onChangeClick("home")}
              >
                <Link
                  activeClass="active"
                  to="WebPlatform"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <div onClick={() => this.onChangeClick("home")}>
                    Web Platform
                  </div>
                </Link>
              </div>
            </div>
          </Dropdown>
          <Dropdown ref={this.dropdown} childrenClassName={css.dropdown2}>
            <div
              className={cx(css.menuContent, css.menuContentHover)}
              onClick={() => this.onChangeClick("notice")}
            >
              Support
            </div>
            <div className={css.menuWrapper}>
              <div
                className={cx(css.menuPadding, css.menuContentHover)}
                onClick={() => this.onChangeClick("notice")}
              >
                Notice
              </div>
              <div
                className={cx(css.menuPadding, css.menuContentHover)}
                onClick={() => this.onChangeClick("contacts")}
              >
                Contacts
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  };

  front_mobile = () => {
    const { clickMenu } = this;
    const { isShowNavigation } = this.state;
    const { selectedView, pageView } = this.props;

    return (
      <div className={css.headerWrapper}>
        <div className={css.headerLayout1}>
          <div onClick={() => this.onChangeClick("home")}>
            <img
              className={css.headerLogo}
              src={`/img/ARED-LOGO-temp.png`}
              alt="ARED-LOGO"
            />
          </div>
        </div>
        <div className={css.mobileNavigation}>
          <IoMdMenu size={"3rem"} onClick={clickMenu} className={css.burger} />
        </div>
        {isShowNavigation ? (
          <div className={css.navigationArea}>
            <MobileHeader
              outsideClick={clickMenu}
              selectedView={selectedView}
              pageView={pageView}
            />
          </div>
        ) : null}
      </div>
    );
  };

  render() {
    const { isMobile } = this.props;
    const { front_mobile, front_pc } = this;

    if (isMobile === false) {
      return front_pc();
    } else {
      return front_mobile();
    }
  }
}

export default Header;
