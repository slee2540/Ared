import React, { Component } from "react";
import maincss from "../main.module.css";
import css from "./forexsolution.module.css";

class ForexSolution extends Component {
  render() {
    return (
      <div className={maincss.fsWrapper}>
        <div className={maincss.flexWrapper1} />
        <div className={maincss.flexWrapper2}>
          <div className={css.fsTitle}>FOREX SOLUTION</div>
          <div className={css.fsContentWrapper}>
            <ul className={css.fsContent}>
              <li className={css.fsContentTitle}>FOREX BROKER TURNKEY</li>
              <li className={css.fsContentSub}>
                해외 법인 설립부터 Forex 거래 환경 셋팅까지 FX Broker로 활동하기
                위한 모든 과정을 Turnkey로 진행 가능
              </li>
              <li className={css.fsContentLast}>
                > 각 국의 국제적 신용도 및 금융환경 수준에 기반한 Tier List 와
                각 소재지의 장단점을 포함한 제안서 제공으로 해외 법인 설립의
                제반 지식 전파
              </li>
              <li className={css.fsContentLast}>
                > Tier 에 맞는 해외 은행 소개 및 서류 준비부터 담당자 연결에
                이르는 법인 계좌 개설 대행
              </li>
            </ul>
            <ul className={css.fsContent}>
              <li className={css.fsContentTitle}>WHITE LABEL MT4/MT5</li>
              <li className={css.fsContentSub}>
                Meta Trader 4/5를 기반으로 한 White Label 환경을 LP 연결부터
                맞춤 셋팅까지 모두 제공
              </li>
              <li className={css.fsContentLast}>
                > Meta Trader 라이선스 구매 및 등록 대행
              </li>
              <li className={css.fsContentLast}>
                > Meta Trader 환경 설정을 포함한 고객 맞춤형 셋팅
              </li>
              <li className={css.fsContentLast}>
                > FX 비즈니스를 영위하기 위하여 필수적인 Liquidity를 지속적으로
                제공받을 수 있도록 LP 주선 및 협상 대행
              </li>
            </ul>
            <ul className={css.fsContent}>
              <li className={css.fsContentTitle}>FOREX BUSINESS CONSULTING</li>
              <li className={css.fsContentSub}>
                Aggregating 부터 Retail 에 이르기까지 Forex 전반에 걸친 비즈니스
                컨설팅 제공
              </li>
              <li className={css.fsContentLast}>
                > FX 비즈니스의 A 부터 Z 까지 지식 함양을 위한 강의
              </li>
              <li className={css.fsContentLast}>
                > FX 시장 구조 설명과 더불어 사업 방향에 대한 조언과 고객
                Profiling 을 통한 Solution 서비스
              </li>
              <li className={css.fsContentLast}>
                > 풍부한 FX Broker 경험을 바탕으로 한 Know-How 제공
              </li>
            </ul>
          </div>
        </div>
        <div className={maincss.flexWrapper3} />
      </div>
    );
  }
}

export default ForexSolution;
