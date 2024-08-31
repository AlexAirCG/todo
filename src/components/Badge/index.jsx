import React from "react";
import classNames from "classnames";
import "./badge.css";

const Badge = ({ color, click, className }) => (
  <i
    onClick={click}
    className={classNames("badge", { [`badge--${color}`]: color }, className)}
  ></i>
);

export default Badge;
