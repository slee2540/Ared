import React, { Component } from "react";
import css from "../main.module.css";

class Header extends Component {
  render() {
    return (
      <div className={css.footerWrapper}>
        <div className={css.footerLayout1} />
        <div className={css.footerLayout2}>
          <div className={css.footerSub1}>
            <img
              className={css.footerLogo}
              src={`/img/ARED-LOGO-temp.png`}
              alt="logo"
            />
          </div>
          <div className={css.footerSub2}>
            ⓒ 2019 ARED Inc. All Right Reserved.
          </div>
        </div>
        <div className={css.footerLayout3} />
      </div>
    );
  }
}

export default Header;
