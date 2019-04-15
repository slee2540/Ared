import React, { Component } from "react";
import css from "../main.module.css";

class ForexSolution extends Component {
  render() {
    return (
      <div className={css.contentWrapper}>
        <div className={css.flexWrapper1} />
        <div className={css.flexWrapper2}>
          <div className={css.fsTitle}>Forex Solution</div>
          <div>
            <ul className={css.fsContent}>
              <li className={css.fsContentTitle}>Forex Broker Turnkey</li>
              <li className={css.fsContentSub}>
                해외 법인 설립부터 Forex 거래 환경 세팅까지 Turnkey로 진행 가능
              </li>
            </ul>
            <ul className={css.fsContent}>
              <li className={css.fsContentTitle}>White Label MT4/MT5</li>
              <li className={css.fsContentSub}>
                MetaTrader 4/5 를 기반으로 한 White Label 환경 제공
              </li>
            </ul>
            <ul className={css.fsContent}>
              <li className={css.fsContentTitle}>Forex Business Consulting</li>
              <li className={css.fsContentSub}>
                Forex 전반에 걸친 비즈니스 컨설팅 제공
              </li>
            </ul>
          </div>
        </div>
        <div className={css.flexWrapper3} />
      </div>
    );
  }
}

export default ForexSolution;
