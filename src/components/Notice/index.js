import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { FaEllipsisH } from "react-icons/fa";
import css from "../main.module.css";

class Notice extends Component {
  render() {
    return (
      <div className={css.contentWrapper}>
        <div className={css.flexWrapper1} />
        <div className={css.flexWrapper2}>
          <div className={css.noticeWrapper}>
            <div className={css.noticeIntroWrapper}>
              <div className={css.noticIntroSubWrapper}>
                <img
                  className={css.noticeIntro}
                  src={`/img/ARED-LOGO-temp.png`}
                  alt="ARED-LOGO"
                  align="center"
                />
              </div>
              <div className={css.noticIntroText}>
                <br />
                <br />
                ARED는 숙련된 FX 트레이더이자 브로커로서 <br />
                <br />
                다년간의 FX 경력과 이를 통해 축적된 풍부한 노하우를 자랑합니다.
                <br />
                <br />
                <br />
                <br />
                ARED는 숙달된 IT 개발자로서 업계 최고의 기술력으로 거래
                참여자에게 <br />
                <br />
                최적화된 FX 거래 환경과 거래소를 개발해 왔습니다.
                <br />
                <br />
                <br />
                <br />
                ARED는 우월한 총합재원 거래소 Aggregated Resources Exchange
                Dominant로서, <br />
                <br />
                세계 최고의 투자처로서 고객님에게 최고의 거래 경험을 선사합니다.
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className={css.flexWrapper3} />
      </div>
    );
  }
}

export default Notice;
