import React, { Component } from "react";
// import cx from "classnames";
import { Link } from "react-scroll";
// import { Redirect } from "react-router-dom";
import { IoMdMenu } from "react-icons/io"; //burger모양 작업
// import Dropdown from "../Dropdown/index";
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

  refreshHome = () => {
    // const { selectedView } = this.props;
    // selectedView("test");
    window.location.reload(false);
    // this.forceUpdate();
    // const { selectedView } = this.props;
    // selectedView("support");
    // selectedView("home");
    // this.setState({ isShowNavigation: false });
    // console.log(this.props);
    // this.props.history.push(`/`);
  };

  front_pc = () => {
    return (
      <div className={css.headerWrapper}>
        <div className={css.headerLayout1}>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img
              className={css.headerLogo}
              src={`/img/ARED-LOGO-temp.png`}
              alt="ARED-LOGO"
              // onClick={() => this.refreshHome()}
            />
          </Link>
        </div>

        <div className={css.headerLayout2}>
          <div className={css.headerBtn}>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                onClick={() => this.onChangeClick("home")}
                className={css.headerFont}
              >
                HOME
              </div>
            </Link>
          </div>
          <div className={css.headerBtn}>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                onClick={() => this.onChangeClick("home")}
                className={css.headerFont}
              >
                ABOUT US
              </div>
            </Link>
          </div>
          <div className={css.headerBtn}>
            <Link
              activeClass="active"
              to="ExchangeSolution"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                onClick={() => this.onChangeClick("home")}
                className={css.headerFont}
              >
                EXCHANGE SOLUTION
              </div>
            </Link>
          </div>
          <div className={css.headerBtn}>
            <Link
              activeClass="active"
              to="ForexSolution"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                onClick={() => this.onChangeClick("home")}
                className={css.headerFont}
              >
                FOREX SOLUTION
              </div>
            </Link>
          </div>
          <div className={css.headerBtn}>
            <Link
              activeClass="active"
              to="WebPlatform"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                onClick={() => this.onChangeClick("home")}
                className={css.headerFont}
              >
                WEB PLATFORM
              </div>
            </Link>
          </div>
          <div className={css.headerBtn}>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                onClick={() => this.onChangeClick("home")}
                className={css.headerFont}
              >
                CONTACT
              </div>
            </Link>
          </div>
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
          {/* <div onClick={() => window.location.reload()}> */}
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img
              className={css.headerLogo}
              src={`/img/ARED-LOGO-temp.png`}
              alt="ARED-LOGO"
              // onClick={() => this.refreshHome()}
            />
          </Link>
          {/* <img
              className={css.headerLogo}
              src={`/img/ARED-LOGO-temp.png`}
              alt="ARED-LOGO"
            /> */}
          {/* </div> */}
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
