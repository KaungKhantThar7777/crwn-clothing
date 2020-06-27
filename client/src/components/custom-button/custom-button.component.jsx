import React from "react";

import { BtnContainer, CustomButtonContainer } from "./custom-button.styles";

function CustomButton({ children, ...props }) {
  return (
    <BtnContainer>
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </BtnContainer>
  );
}

export default CustomButton;
