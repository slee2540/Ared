import React, { Component } from "react";
import cx from "classnames";
import LeftSidebar from "../LeftSidebar.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "../page.module.css";

import { GiHouse } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

class Contacts extends Component {
  frontPC = () => {
    const { pageView, isMobile, selectedView } = this.props;
    return (
      <div>
        <Header
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
        <div className={css.wrapper}>
          <div className={css.headerflex1} />
          <div className={css.headerflex2}>
            <div className={css.flexItem1}>
              <div>
                <h1 className={css.pageTitleLeft}>{"Support"}</h1>
              </div>
              <div className={css.leftSide}>
                <LeftSidebar
                  selected="contacts"
                  pageView={pageView}
                  isMobile={isMobile}
                  selectedView={selectedView}
                />
              </div>
            </div>
            <div className={css.flexItem2}>
              <div className={css.rightHeader}>
                <h1 className={cx(css.rightHeaderLeft, css.pageTitleRight)}>
                  {"Contacts"}
                </h1>
              </div>
              <div className={css.rightSide} />
            </div>
          </div>
          <div className={css.headerflex3} />
        </div>
        <Footer />
      </div>
    );
  };
  frontMobile = () => {
    const { pageView, isMobile, selectedView } = this.props;

    return (
      <div className={css.mobileWrapper}>
        <Header
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
        <div>
          <LeftSidebar
            selected="contacts"
            pageView={pageView}
            isMobile={isMobile}
            selectedView={selectedView}
          />
          <div className={css.contactsWrapper}>
            <div className={css.map}>
              <div className={css.mapWrapper}>
                <img
                  className={css.mapImage}
                  src={`/img/map.png`}
                  alt="icon_01"
                />
              </div>
            </div>
            <div className={css.contacts}>
              <div className={css.contactContainer}>
                <div className={css.contactImage}>
                  <GiHouse size={"1.5rem"} />
                </div>
                <div className={css.contactText}>
                  서울특별시 강남구 언주로 527
                </div>
              </div>
              <div className={css.contactContainer}>
                <div className={css.contactImage}>
                  <IoIosMail size={"1.5rem"} />
                </div>
                <div className={css.contactText}>support@theared.com</div>
              </div>
              <div className={css.contactContainer}>
                <div className={css.contactImage}>
                  <FaPhone size={"1.5rem"} />
                </div>
                <div className={css.contactText}>02-2028-3720</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  render() {
    const { isMobile } = this.props;
    if (isMobile === true) {
      return this.frontMobile();
    } else {
      return this.frontPC();
    }
  }
}

export default Contacts;
