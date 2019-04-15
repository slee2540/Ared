import React, { Component } from "react";
import css from "../main.module.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        {/* <img src={"img/ARED_web_Main_BG.jpg"} alt="" className={css.mainPage} /> */}
        <div className={css.mainPage}>
          <div className={css.mainText}>
            <div className={css.mainTextSpace1} />
            <div className={css.mainTextSpace2}>
              <h1>Exchange of the trader,</h1>
              <h1>by the trader, for the trader.</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
