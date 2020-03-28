import React from "react";
import PropTypes from "prop-types";
export default function TodoHeader(props) {
  console.log(props);
  return (
    <>
      <h1>{props.children}</h1>
      <p>{props.desc}</p>
      <p>{props.x + props.y}</p>
    </>
  );
}

//prop-types 验证传递的数据类型
TodoHeader.propTypes = {
  desc: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number
};
TodoHeader.defaultProps = {
  desc: "默认描述"
};
