/* next */
import styled from "@emotion/styled";
import type { FC, HTMLInputTypeAttribute } from "react";

interface IInput {
  placeholder: string;
  width?: string;
  type?: HTMLInputTypeAttribute;
}
export const CustomInput = styled.input<{ width }>`
  width: ${(props) => props.width || "100%"};
  height: 60px;
  padding: 0 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const Input: FC<IInput> = ({ placeholder, type = "text", width }) => {
  return <CustomInput placeholder={placeholder} type={type} width={width} />;
};
