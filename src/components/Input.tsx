import React from "react";
interface InputProps {
  backgroundColor: string;
  label: string;
  width: string;
}
const Input: React.FC<InputProps> = ({ backgroundColor, label, width }) => {
  return (
    <div>
      <label>user name</label>
      <input type="text" />
    </div>
  );
};

export default Input;
