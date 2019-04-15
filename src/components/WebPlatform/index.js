import React, { Component } from "react";
import css from "../main.module.css";

class WebPlatform extends Component {
  render() {
    return (
      <div className={css.contentWrapper}>
        <div className={css.flexWrapper1} />
        <div className={css.flexWrapper2}>
          <div>
            <div className={css.webTitle}>Web Platform Environment</div>
            <div className={css.webFeatureWrapper}>
              <ul className={css.webUlWrapper}>
                <li className={css.webFeatureTop}>
                  <img
                    className={css.featureImage2}
                    src={`/img/icon_04.png`}
                    alt="icon_04"
                  />
                </li>
                <li className={css.webFeatureMiddle}>System Trading</li>
                <li className={css.webFeatureBottom}>
                  시스템 자동 매매가 가능한 플랫폼 환경 제공
                </li>
              </ul>
              <ul className={css.webUlWrapper}>
                <li className={css.webFeatureTop}>
                  <img
                    className={css.featureImage2}
                    src={`/img/icon_05.png`}
                    alt="icon_05"
                  />
                </li>
                <li className={css.webFeatureMiddle}>Signal Trading</li>
                <li className={css.webFeatureBottom}>
                  타인의 거래 신호를 받아서 거래할 수 있는 <br />
                  <br />
                  Signal Following 플랫폼 환경 제공
                </li>
              </ul>
              <ul className={css.webUlWrapper}>
                <li className={css.webFeatureTop}>
                  <img
                    className={css.featureImage2}
                    src={`/img/icon_06.png`}
                    alt="icon_06"
                  />
                </li>
                <li className={css.webFeatureMiddle}>API Trading</li>
                <li className={css.webFeatureBottom}>
                  API 를 제공하는 외부 거래환경을 <br />
                  <br />
                  통합 관리할 수 있는 플랫폼 환경 제공
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.flexWrapper3} />
      </div>
    );
  }
}

export default WebPlatform;
