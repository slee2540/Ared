import React, { Component } from "react";
import maincss from "../main.module.css";
import css from "./webplatform.module.css";
class WebPlatform extends Component {
  render() {
    return (
      <div className={maincss.webWrapper}>
        <div className={maincss.flexWrapper1} />
        <div className={maincss.flexWrapper2}>
          <div>
            <div className={css.webTitle}>Web Platform Environment</div>
            <div className={css.webFeatureWrapper}>
              <ul className={css.webUlWrapper}>
                <li className={css.webFeatureImage}>
                  <img
                    className={css.webImage}
                    src={`/img/icon_04.png`}
                    alt="icon_04"
                  />
                </li>
                <li className={css.webFeatureText}>
                  <div className={css.webContentTitle}>System Trading</div>
                  <div className={css.webContentSub}>
                    시스템 자동 매매가 가능한 플랫폼 환경 제공
                  </div>
                  <div className={css.webContentLast}>
                    > 사용자의 거래 전략을 시스템으로 자동화할 수 있는 환경 제공
                  </div>
                  <div className={css.webContentLast}>
                    > 과거 데이터를 기반으로한 전략 테스트를 통해서 매매 전략을
                    검증할 수 있는 환경 제공
                  </div>
                </li>
              </ul>
              <ul className={css.webUlWrapper}>
                <li className={css.webFeatureImage}>
                  <img
                    className={css.webImage}
                    src={`/img/icon_05.png`}
                    alt="icon_05"
                  />
                </li>
                <li className={css.webFeatureText}>
                  <div className={css.webContentTitle}>SIGNAL TRADING</div>
                  <div className={css.webContentSub}>
                    숙련된 트레이더의 수익성 높은 거래 전략 신호를 이용하여 거래
                    할 수 있는 플랫폼 환경 제공
                  </div>
                  <div className={css.webContentLast}>
                    > 미숙한 거래 참여자에게 수익성 높은 거래의 전략 신호를 받아
                    거래 할 수 있는 환경 제공
                  </div>
                  <div className={css.webContentLast}>
                    > 숙련된 거래 참여자는 전략 신호를 공유함으로써 추가 수익
                    실현 가능
                  </div>
                </li>
              </ul>
              <ul className={css.webUlWrapper}>
                <li className={css.webFeatureImage}>
                  <img
                    className={css.webImage}
                    src={`/img/icon_06.png`}
                    alt="icon_06"
                  />
                </li>
                <li className={css.webFeatureText}>
                  <div className={css.webContentTitle}>System Trading</div>
                  <div className={css.webContentSub}>
                    시스템 자동 매매가 가능한 플랫폼 환경 제공
                  </div>
                  <div className={css.webContentLast}>
                    > 사용자의 거래 전략을 시스템으로 자동화할 수 있는 환경 제공
                  </div>
                  <div className={css.webContentLast}>
                    > 과거 데이터를 기반으로한 전략 테스트를 통해서 매매 전략을
                    검증할 수 있는 환경 제공
                  </div>
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

export default WebPlatform;
