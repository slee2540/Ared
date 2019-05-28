import React, { Component } from "react";
import { Element } from "react-scroll";
import cx from "classnames";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import ExchangeSolution from "./components/ExchangeSolution";
import ForexSolution from "./components/ForexSolution";
import WebPlatform from "./components/WebPlatform";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import NoticePage from "./Page/Notice";
// import ContactsPage from "./Page/Contacts";
import css from "./components/main.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.choosePage = React.createRef();
    this.main = React.createRef();
  }

  state = {
    pageView: "home",
    isMobile: false
  };

  componentDidMount() {
    console.log(this.main.current);
  }

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

  home = isDisplay => {
    const { pageView, isMobile } = this.state;
    const { selectedView } = this;

    return (
      <div
        ref={this.main}
        className={css.wrapper}
        style={
          isDisplay === false ? { visibility: "hidden", height: "0" } : null
        }
      >
        <Header
          ref={this.choosePage}
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
        <section>
          <Element name="Home" className="element" />
          <div className={cx(css.content)}>
            <MainPage />
          </div>
        </section>

        <section>
          <Element name="About" className="element" />
          <div className={cx(css.content, css.noticeImage)}>
            <About isMobile={isMobile} />
          </div>
        </section>
        <section>
          <Element name="ExchangeSolution" className="element" />
          <div className={css.content}>
            <ExchangeSolution isMobile={isMobile} />
          </div>
        </section>
        <section>
          <Element name="ForexSolution" className="element" />
          <div className={cx(css.content)}>
            <ForexSolution />
          </div>
        </section>
        <section>
          <Element name="WebPlatform" className="element" />
          <div className={css.content}>
            <WebPlatform />
          </div>
        </section>
        <Element name="Contact" className="element" />
        <Contact />
        {/* <section>
          <Element name="Contact" className="element" />
          <div className={css.content}>
            <Contact />
          </div>
        </section> */}
        <Footer />
      </div>
    );
  };

  render() {
    return this.home(true);
  }
}

export default App;
