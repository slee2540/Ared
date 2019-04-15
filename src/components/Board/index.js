import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import shortid from "shortid";
import cx from "classnames";

import BoardItem from "./BordItem";
import css from "./board.module.css";

const Col = styled.li`
  flex: 1;
  flex-basis: ${props => (props.colWidth ? props.colWidth : "")};
  flex-shrink: 0;
  flex-grow: ${props => (props.fixed ? 0 : 1)};
  text-align: ${props => props.align};
`;

class Board extends Component {
  createHeader = () => {
    const { header } = this.props;
    const random = shortid.generate();

    const items = header.map((val, index) => {
      const key = `th${random}${index}`;
      const customHeaderComponent = val.customHeaderComponent
        ? val.customHeaderComponent(header)
        : null;

      if (val.id === "subject" || val.id === "question") {
        return (
          <Col
            key={key}
            colWidth={val.colWidth}
            fixed={val.fixed}
            align="center"
          >
            {customHeaderComponent || val.name}
          </Col>
        );
      }

      return (
        <Col
          key={key}
          colWidth={val.colWidth}
          fixed={val.fixed}
          align={val.align}
        >
          {customHeaderComponent || val.name}
        </Col>
      );
    });

    return <ul className={cx(css.tableHeader, css.rowHeader)}>{items}</ul>;
  };

  createData = () => {
    const {
      header,
      list,
      select,
      onClick,
      isBoard,
      content,
      attachment,
      answer,
      isQna
    } = this.props;

    const items = [];
    list.forEach((val, index) => {
      const random = shortid.generate();
      const rowKey = `row${random}${index}`;
      const row = header.map((headerItem, headerIndex) => {
        const colKey = `col${random}${index}${headerIndex}`;
        const customComponent = headerItem.customComponent
          ? headerItem.customComponent(val)
          : null;
        const clickEvent = headerItem.onClick
          ? e => {
              e.stopPropagation();
              headerItem.onClick(val);
            }
          : null;

        // console.log(customComponent,val[headerItem.id])

        return (
          <Col
            key={colKey}
            colWidth={headerItem.colWidth}
            onClick={clickEvent}
            fixed={headerItem.fixed}
            align={headerItem.align}
          >
            {customComponent || val[headerItem.id]}
          </Col>
        );
      });

      const selectedId = Object.keys(select)[0];
      const isSelected =
        select[selectedId] !== undefined &&
        select[selectedId] === val[selectedId];
      const itemClass = cx({
        "sub-object-color": true,
        [css.notBoradStyle]: !isBoard,
        [css.tableContent]: isBoard,
        [css.active]: isSelected,
        [css.row]: true
      });

      items.push(
        <ul className={itemClass} key={rowKey} onClick={() => onClick(val)}>
          {row}
        </ul>
      );

      // console.log(content, val, selectedId);
      if (isBoard && isSelected) {
        const boardRowKey = `brow${random}${index}`;
        items.push(
          <ul className={cx(css.tableContent)} key={boardRowKey}>
            <BoardItem
              content={content}
              attachment={attachment}
              answer={answer}
              isQna={isQna}
            />
          </ul>
        );
      }
    });

    return items;
  };

  render() {
    const { disableHeader, pagination } = this.props;
    const { createHeader, createData } = this;
    return (
      <div>
        <div className={css.wrapper}>
          {disableHeader ? null : createHeader()}
          {createData()}
        </div>
        {pagination !== null ? (
          <div className={css.paginationWrapper}>{pagination}</div>
        ) : null}
      </div>
    );
  }
}

Board.propTypes = {
  disableHeader: PropTypes.bool,
  header: PropTypes.array,
  list: PropTypes.array,
  select: PropTypes.object,
  onClick: PropTypes.func,
  isBoard: PropTypes.bool,
  content: PropTypes.string,
  attachment: PropTypes.array,
  answer: PropTypes.string,
  isQna: PropTypes.bool,
  pagination: PropTypes.array
};

Board.defaultProps = {
  disableHeader: false,
  header: [],
  list: [],
  select: {},
  onClick: () => {},
  isBoard: false,
  content: "",
  attachment: [],
  answer: "",
  isQna: false,
  pagination: null
};

export default Board;
