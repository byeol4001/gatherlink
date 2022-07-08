/* next */
import styled from "@emotion/styled";
import type { FC } from "react";

interface IButton {
  text: String;
  width?: String;
  type?: "button" | "submit" | "reset";
  backgroundColor?: String;
}
export const CustomButton = styled.button<{ width; backgroundColor }>`
  width: 100%;
  height: 60px;
  padding: 0;
  line-height: 60px;
  font-weight: 700;
  border-radius: 8px;
  width: ${(props) => props.width || "100px"};
  background: ${(props) => props.backgroundColor || "#333333"};
  color: #ffffff;
  transition: all ease-in 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Button: FC<IButton> = ({
  text,
  type = "button",
  width,
  backgroundColor,
}) => {
  return (
    <CustomButton type={type} width={width} backgroundColor={backgroundColor}>
      {text}
    </CustomButton>
  );
};
