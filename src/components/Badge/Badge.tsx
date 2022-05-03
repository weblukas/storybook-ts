import IBadge from "./Badge.d";
import React from "react";
import cn from "classnames";
import "./Badge.css";
import home from '../../assets/home.svg';

const Badge = ({ color, label, size }: IBadge): JSX.Element => (
  <div className={cn(`badge, badge--${color}`, `badge--${size}`)}>
      <img src={home} alt="icon" />
      {label}</div>
);


export default Badge;
