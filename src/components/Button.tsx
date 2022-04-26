import React from "react";

export interface ButtonProps  {
  label: string
  backgroundColor: string
  width: string
}
const  Button: React.FC<ButtonProps> = () => {
  return (
    <>
      <button>
            hello
    </button>
    </>
  );
};

export default Button;
