import React, { Component } from "react";
import * as Api from "../../api/api";
import cx from "classnames";
import dayjs from "dayjs";
// import { ReactComponent as Search } from "./tes-search.svg";
import LeftSidebar from "../LeftSidebar.js";
import Board from "../../components/Board";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "../page.module.css";

let PAGE_COUNT = 10;

const noticesHeader = [
  {
    id: "title",
    name: "제목",
    colWidth: "65%"
    // align: 'center'
  },
  {
    id: "pub_date",
    name: "게시일",
    colWidth: "15%",
    align: "center",
    customComponent: val => dayjs(val.pub_date).format("YYYY-MM-DD")
  }
  // {
  //   id: "hit",
  //   name: "조회수",
  //   colWidth: "10%",
  //   align: "center"
  // }
];

class Notice extends Component {
  state = {
    noticeList: [],
    currPage: 1,
    lastPage: 1,
    meta: {
      category: []
    },
    selectedCategory: 0,
    selector: {
      notice_id: ""
    },
    content: "",
    searchText: ""
  };

  componentDidMount() {
    this.getNoticeList(1);
  }

  getNoticeList = pageNum => {
    const params = {
      p: pageNum,
      cpp: 8
    };

    Api.getNoticeList(params).then(result => {
      const newData = result.data;
      this.setState({
        noticeList: newData.posts,
        currPage: newData.pagenation.current_page,
        lastPage: newData.pagenation.last_page,
        meta: newData.meta
      });
    });
  };

  clickNewsContent = id => {
    const { selector } = this.state;
    if (selector.notice_id === id) {
      this.setState({
        selector: {
          notice_id: ""
        },
        content: ""
      });
    } else {
      const params = {
        idx: id
      };

      Api.getNoticeContent(params).then(result => {
        this.setState({
          selector: { idx: result.data.idx },
          content: result.data.content
        });
      });
    }
  };

  searchNews = text => {
    const { selectedCategory } = this.state;
    const params = {
      page: 1,
      page_item_count: 10,
      category: selectedCategory,
      search: text,
      lang: localStorage.getItem("language")
    };

    Api.getNoticeList(params).then(
      result => {
        const newData = result.data;
        this.setState({
          noticeList: newData.notice_list,
          currPage: newData.pagination.current_page,
          lastPage: newData.pagination.last_page,
          meta: newData.meta
        });
      },
      err => {
        this.expInfoModal.current.open(err.response.data);
      }
    );
  };

  searchTextChange = e => {
    this.setState({ searchText: e.target.value });
    if (e.charCode === 13) {
      this.searchNews(e.target.value);
    }
  };

  searchIconClick = () => {
    const { searchText } = this.state;
    this.searchNews(searchText);
  };

  clickPrevPage = () => {
    const { currPage } = this.state;
    const prevPage = currPage - 1;
    if (prevPage >= 1) {
      this.getNoticeList(prevPage);
    }
  };

  clickNextPage = () => {
    const { currPage, lastPage } = this.state;
    const nextPage = currPage + 1;
    if (nextPage <= lastPage) {
      this.getNoticeList(nextPage);
    }
  };

  createPagination = count => {
    PAGE_COUNT = count;
    const { noticeList, currPage, lastPage } = this.state;
    const { getNoticeList, clickPrevPage, clickNextPage } = this;

    if (noticeList.length < 1) return null;

    const viewPagesCount =
      lastPage - Math.floor((currPage - 1) / PAGE_COUNT) * PAGE_COUNT >=
      PAGE_COUNT
        ? PAGE_COUNT
        : (lastPage - Math.floor(currPage / PAGE_COUNT) * PAGE_COUNT) %
          PAGE_COUNT;
    const pageItemClass = x =>
      cx({
        [css.buttonColor]: true,
        [css.paginationCurrent]:
          Math.floor((currPage - 1) / PAGE_COUNT) * PAGE_COUNT + x === currPage,
        [css.paginationHover]:
          Math.floor((currPage - 1) / PAGE_COUNT) * PAGE_COUNT + x !== currPage
      });
    const pageItems = [];

    pageItems.push(
      <li key="page-prevbtn" className={css.paginationList}>
        <button
          className={css.buttonColor}
          type="button"
          onClick={clickPrevPage}
        >
          {currPage <= 1 ? <div>&nbsp;</div> : "<"}
        </button>
      </li>
    );

    for (let x = 1; x <= viewPagesCount; x += 1) {
      const currPageNo =
        Math.floor((currPage - 1) / PAGE_COUNT) * PAGE_COUNT + x;
      pageItems.push(
        <li key={`page-${x}`} className={css.paginationList}>
          <button
            type="button"
            className={pageItemClass(x)}
            onClick={() => getNoticeList(currPageNo)}
          >
            {currPageNo}
          </button>
        </li>
      );
    }

    pageItems.push(
      <li key="page-nextbtn" className={css.paginationList}>
        <button
          className={css.buttonColor}
          type="button"
          onClick={clickNextPage}
        >
          {currPage === lastPage ? <div>&nbsp;</div> : ">"}
        </button>
      </li>
    );

    return pageItems;
  };

  frontPC = () => {
    const { noticeList, selector, content } = this.state;
    const { createPagination } = this;

    const { pageView, isMobile, selectedView } = this.props;

    return (
      <div>
        <Header
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
        <div className={css.wrapper}>
          <div className={css.headerflex1} />
          <div className={css.headerflex2}>
            <div className={css.flexItem1}>
              <div>
                <h1 className={css.pageTitleLeft}>{"Support"}</h1>
              </div>
              <div className={css.leftSide}>
                <LeftSidebar
                  selected="notice"
                  pageView={pageView}
                  isMobile={isMobile}
                  selectedView={selectedView}
                />
              </div>
            </div>
            <div className={css.flexItem2}>
              <div className={css.rightHeader}>
                <h1 className={cx(css.rightHeaderLeft, css.pageTitleRight)}>
                  {"공지사항"}
                </h1>
              </div>

              <div className={css.rightSide}>
                <div className={cx(css.board)}>
                  {noticeList.length > 0 ? (
                    <Board
                      header={noticesHeader}
                      list={noticeList}
                      onClick={e => this.clickNewsContent(e.idx)}
                      select={selector}
                      content={content}
                      pagination={createPagination(10)}
                      isBoard
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className={css.headerflex3} />
        </div>
        <Footer />
      </div>
    );
  };

  frontMobile = () => {
    const { noticeList, selector, content } = this.state;
    const { createPagination } = this;
    const { pageView, isMobile, selectedView } = this.props;

    return (
      <div className={css.mobileWrapper}>
        <Header
          pageView={pageView}
          isMobile={isMobile}
          selectedView={selectedView}
        />
        <div>
          <LeftSidebar
            selected="notice"
            pageView={pageView}
            isMobile={isMobile}
            selectedView={selectedView}
          />
          {noticeList ? (
            <Board
              header={noticesHeader}
              list={noticeList}
              onClick={e => this.clickNewsContent(e.notice_id)}
              select={selector}
              content={content}
              pagination={createPagination(5)}
              isBoard
              disableHeader
            />
          ) : null}
        </div>
        <Footer />
      </div>
    );
  };

  render() {
    const { isMobile } = this.props;
    if (isMobile === true) {
      return this.frontMobile();
    } else {
      return this.frontPC();
    }
  }
}

export default Notice;
