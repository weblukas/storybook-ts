import IBadge from "./Badge.d";
import React from "react";
import cn from "classnames";
import "./Badge.css";
import SvgComp from "../SvgComponent/SvgComp";

const Badge = ({ color, label, size }: IBadge): JSX.Element => (
  <div className={cn(`badge, badge--${color}`, `badge--${size}`)}>{label}</div>
);

const Test = <Badge label="ds" />;

export default Badge;
