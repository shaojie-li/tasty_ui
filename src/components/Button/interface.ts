import React from "react";

export interface ButtonProps extends React.DOMAttributes<HTMLButtonElement> {
    disabled?: boolean;
    /** 按钮颜色 */
    color?: string;
    children?: React.ReactNode;
}
