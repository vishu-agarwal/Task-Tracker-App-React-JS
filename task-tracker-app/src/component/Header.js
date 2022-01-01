// import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <Header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </Header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.PropTypes = {
  title: PropTypes.string.isRequired
};
// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black"
// };

export default Header;
