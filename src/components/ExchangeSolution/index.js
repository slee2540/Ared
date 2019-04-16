import React, { Component } from "react";
// import { Element } from "react-scroll";
import css from "../main.module.css";

class ExchangeSolution extends Component {
  frontPC = () => {
    return (
      <div className={css.contentWrapper}>
        <div className={css.flexWrapper1} />
        <div className={css.flexWrapper2}>
          <div className={css.esRow}>
            <div className={css.esTitle}>Exchange Solution</div>
            <div className={css.esTitle2}>
              &nbsp;:&nbsp;The Most Advanced Exchange
            </div>
          </div>
          <div className={css.esSubTitle}>
            ARED는 금융 거래 플랫폼 개발 및 Forex 마켓 운영에 대한 풍부한 경험을
            바탕으로, 업계 최고의 기술로 최적화된 Exchange Trading 환경을
            제공합니다.
            <br />
            <br /> 제도권에 준하는 DB 관리로 고객 자산을 안전하게 관리하며 거래
            데이터의 무결성을 보장합니다.
          </div>
          <div className={css.esFeature}>Our Key Features</div>
          <div className={css.esFeatureWrapper}>
            <ul className={css.featureUl}>
              <li className={css.esFeatureTop}>
                <img
                  className={css.featureImage}
                  src={`/img/icon_02.png`}
                  alt="icon_01"
                />
              </li>
              <li className={css.esFeatureMiddle}>
                High-Performance
                <br /> Exchange
              </li>
              <li className={css.esFeatureBottom}>
                초당 최대 1,000 거래를 안정적으로 처리하는 <br />
                <br />
                Matching Engine을 바탕으로 <br />
                <br />
                다양한 Exchange Market 에 적용 가능
                <br />
                <br />
              </li>
            </ul>
            <ul className={css.featureUl}>
              <li className={css.esFeatureTop}>
                <img
                  className={css.featureImage}
                  src={`/img/icon_03.png`}
                  alt="icon_02"
                />
              </li>
              <li className={css.esFeatureMiddle}>User-Friendly Interface</li>
              <li className={css.esFeatureBottom}>
                Single Page Application(SPA) 으로 Interface 구성
                <br />
                <br />
                모든 기능을 페이지 이동 없이 이용 가능한 <br />
                <br />
                최적의 UX 환경 제공
                <br />
                <br />
              </li>
            </ul>
            <ul className={css.featureUl}>
              <li className={css.esFeatureTop}>
                <img
                  className={css.featureImage}
                  src={`/img/icon_01.png`}
                  alt="icon_03"
                />
              </li>
              <li className={css.esFeatureMiddle}>Advanced Order Type</li>
              <li className={css.esFeatureBottom}>
                전문적인 거래를 원하는 트레이더를 위해
                <br />
                <br />
                Limit, Market, Stop Order 기능 제공
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
        <div className={css.flexWrapper3} />
      </div>
    );
  };

  frontMobile = () => {
    return (
      <div className={css.contentWrapper}>
        <div className={css.flexWrapper1} />
        <div className={css.flexWrapper2}>
          <div className={css.esRow}>
            <div className={css.esTitle}>Exchange Solution</div>
            <div className={css.esTitle2}>
              &nbsp;:&nbsp;The Most Advanced Exchange
            </div>
          </div>
          <div className={css.esSubTitle}>
            ARED는 금융 거래 플랫폼 개발 및 Forex 마켓 운영에 대한 풍부한 경험을
            바탕으로, 업계 최고의 기술로 최적화된 Exchange Trading 환경을
            제공합니다.
            <br />
            <br /> 제도권에 준하는 DB 관리로 고객 자산을 안전하게 관리하며 거래
            데이터의 무결성을 보장합니다.
          </div>
          <div className={css.esFeature}>Our Key Features</div>
          <div className={css.esFeatureWrapper}>
            <ul className={css.featureUl}>
              <li className={css.esFeatureTop}>
                <img
                  className={css.featureImage}
                  src={`/img/icon_02.png`}
                  alt="icon_01"
                />
              </li>
              <li className={css.esFeatureMiddle}>
                High-Performance
                <br /> Exchange
              </li>
              <li className={css.esFeatureBottom}>
                초당 최대 1,000 거래를 안정적으로 처리하는 <br />
                <br />
                Matching Engine을 바탕으로 <br />
                <br />
                다양한 Exchange Market 에 적용 가능
                <br />
                <br />
              </li>
            </ul>
            <ul className={css.featureUl}>
              <li className={css.esFeatureTop}>
                <img
                  className={css.featureImage}
                  src={`/img/icon_03.png`}
                  alt="icon_02"
                />
              </li>
              <li className={css.esFeatureMiddle}>User-Friendly Interface</li>
              <li className={css.esFeatureBottom}>
                Single Page Application(SPA) 으로 Interface 구성
                <br />
                <br />
                모든 기능을 페이지 이동 없이 이용 가능한 <br />
                <br />
                최적의 UX 환경 제공
                <br />
                <br />
              </li>
            </ul>
            <ul className={css.featureUl}>
              <li className={css.esFeatureTop}>
                <img
                  className={css.featureImage}
                  src={`/img/icon_01.png`}
                  alt="icon_03"
                />
              </li>
              <li className={css.esFeatureMiddle}>Advanced Order Type</li>
              <li className={css.esFeatureBottom}>
                전문적인 거래를 원하는 트레이더를 위해
                <br />
                <br />
                Limit, Market, Stop Order 기능 제공
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
        <div className={css.flexWrapper3} />
      </div>
    );
  };

  render() {
    const { isMobile } = this.props;
    const { frontMobile, frontPC } = this;
    if (isMobile === true) {
      return frontMobile();
    } else {
      return frontPC();
    }
  }
}

export default ExchangeSolution;
