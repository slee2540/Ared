import React, { Component } from "react";
import { Element } from "react-scroll";
import cx from "classnames";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Notice from "./components/Notice";
import ExchangeSolution from "./components/ExchangeSolution";
import ForexSolution from "./components/ForexSolution";
import WebPlatform from "./components/WebPlatform";
import Footer from "./components/Footer";
import NoticePage from "./Page/Notice";
import ContactsPage from "./Page/Contacts";
import css from "./components/main.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.choosePage = React.createRef();
  }

  state = {
    pageView: "home",
    isMobile: false
  };

  componentWillMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({
      isMobile: window.innerWidth <= 896
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth <= 896) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  selectedView = type => {
    this.setState({ pageView: type });
  };

  render() {
    const { pageView, isMobile } = this.state;
    const { selectedView } = this;

    // console.log(pageView);

    if (pageView === "home") {
      return (
        <div className={css.wrapper}>
          {/* 헤더에 버튼클릭시 콜백함수 호출*/}
          <Header
            ref={this.choosePage}
            pageView={pageView}
            isMobile={isMobile}
            selectedView={selectedView}
          />
          <MainPage />
          <section>
            <Element name="Notice" className="element" />
            <div className={cx(css.content, css.noticeImage)}>
              <Notice />
            </div>
          </section>
          <section>
            <Element name="ExchangeSolution" className="element" />
            <div className={css.content}>
              <ExchangeSolution />
            </div>
          </section>
          <section>
            <Element name="ForexSolution" className="element" />
            <div className={cx(css.content, css.fsImage)}>
              <ForexSolution />
            </div>
          </section>
          <section>
            <Element name="WebPlatform" className="element" />
            <div className={css.content}>
              <WebPlatform />
            </div>
          </section>
          <Footer />
        </div>
      );
    } else if (pageView === "notice")
      return (
        <NoticePage
          ref={this.choosePage}
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
      );
    else if (pageView === "contacts")
      return (
        <ContactsPage
          ref={this.choosePage}
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
      );
  }
}

export default App;
