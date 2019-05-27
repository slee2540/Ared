import React, { Component } from "react";
import maincss from "../main.module.css";
import css from "./about.module.css";

class Notice extends Component {
  render() {
    return (
      <div className={maincss.contentWrapper}>
        <div className={maincss.flexWrapper1} />
        <div className={maincss.flexWrapper2}>
          <div className={css.aboutWrapper}>
            <div className={css.aboutTitle}>ABOUT US</div>
            <div className={css.aboutSubTitle}>
              <div className={css.aboutSubTitleUpper}>A</div>
              <div className={css.aboutSubTitleLower}>ggregated</div>
              <div className={css.aboutSubTitleUpper}>R</div>
              <div className={css.aboutSubTitleLower}>esources</div>
              <div className={css.aboutSubTitleUpper}>E</div>
              <div className={css.aboutSubTitleLower}>xchange</div>
              <div className={css.aboutSubTitleUpper}>D</div>
              <div className={css.aboutSubTitleLower}>ominant</div>
            </div>

            <div className={css.aboutFeatureWrapper}>
              <ul className={css.aboutfeatureUl}>
                <li className={css.aboutFeatureTop}>
                  <img
                    className={css.aboutImage}
                    src={`/img/experience.png`}
                    alt="icon_01"
                  />
                  <div className={css.aboutText}>EXPERIENCED</div>
                </li>
                <li className={css.aboutFeatureMiddle}>
                  숙련된 fx 트레이더이자 브로커로서 다년간의 fx 경력과 이를 통해
                  축적된 풍부한 노하우를 자랑합니다.
                </li>
              </ul>
              <ul className={css.aboutfeatureUl}>
                <li className={css.aboutFeatureTop}>
                  <img
                    className={css.aboutImage}
                    src={`/img/technology.png`}
                    alt="icon_01"
                  />
                  <div className={css.aboutText}>TECHNOLOGY</div>
                </li>
                <li className={css.aboutFeatureMiddle}>
                  숙달된 IT 개발자로서 업계 최고의 기술력으로 거래 참여자에게
                  최적화된 FX 거래 환경과 거래소를 제공합니다.
                </li>
              </ul>
              <ul className={css.aboutfeatureUl}>
                <li className={css.aboutFeatureTop}>
                  <img
                    className={css.aboutImage}
                    src={`/img/service.png`}
                    alt="icon_01"
                  />
                  <div className={css.aboutText}>SERVICE</div>
                </li>
                <li className={css.aboutFeatureMiddle}>
                  초심자부터 숙련자까지 모든 사용자에게 적합한 맞춤형 서비스를
                  통하여 최적의 거래 경험을 선사합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={maincss.flexWrapper3} />
      </div>
    );
  }
}

export default Notice;
