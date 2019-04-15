import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import cx from "classnames";
import css from "./dropdown.module.css";

//  first child -> 클릭 하는 영역
//  second child -> 보여지는 영역
// onClickoutside는 컴포넌트를 감싸기 때문에
// onRef 사용시 getInstance를 통하여야 자식 함수를 사용할 수 있다. npm 참조

class Dropdown extends Component {
  state = {
    open: false
  };

  handleClickOutside = () => {
    // const { open } = this.state;
    // const { onClose } = this.props;
    // const { toggleDropdown } = this;
    this.setState({ open: false });
    // if (open === true) {
    //   toggleDropdown();
    //   if (onClose) onClose();
    // }
  };

  toggleDropdown = () => {
    // const { onClose } = this.props;
    // const { open } = this.state;
    this.setState({ open: true });
    // this.setState({
    //   open: !open
    // });
    // if (!open === false && onClose) onClose();
  };

  close = () => {
    const { onClose } = this.props;
    this.setState(
      {
        open: false
      },
      () => {
        if (onClose) onClose();
      }
    );
  };

  render() {
    const { open } = this.state;
    const { children, className, childrenClassName } = this.props;
    const { toggleDropdown, close } = this;

    return (
      <div className={cx(css.wrapper, className)} onMouseLeave={close}>
        <div
          className={cx(css.headerWrapper, className)}
          onMouseEnter={toggleDropdown}
        >
          {children[0]}
        </div>
        {open && (
          <div className={cx(css.dropdownWrapper, childrenClassName)}>
            {children[1]}
          </div>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
