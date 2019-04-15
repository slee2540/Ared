import React, { Component } from "react";
import css from "../main.module.css";
import { IoMdMenu } from "react-icons/io"; //burger모양 작업
class MobileHeader extends Component {
  state = {
    selectedMenu: "about"
  };

  selectCategory = item => {
    console.log(item);
    // e.preventDefault();
    if (item === "about") {
      this.setState({ selectedMenu: "about" });
    } else if (item === "service") {
      this.setState({ selectedMenu: "service" });
    } else {
      this.setState({ selectedMenu: "support" });
    }
  };

  render() {
    const { selectedMenu } = this.state;
    const { clickMenu } = this;
    return (
      <div onClick={clickMenu}>
        <div>About</div>
        <div onClick={() => this.selectCategory("service")}>Service</div>
        {selectedMenu === "service" ? (
          <>
            <div>Exchange Soulution</div>
            <div>Forex Soulution</div>
            <div>Web Soulution</div>
          </>
        ) : null}
        <div>Support</div>
      </div>
    );
  }
}

export default MobileHeader;
