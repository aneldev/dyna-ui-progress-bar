import * as React from "react";
import "./DynaProgressBar.less";
export interface IDynaProgressBarProps {
    className?: string;
    animationEnabled?: boolean;
    min: number;
    max: number;
    value: number;
    isLoading?: boolean;
    label?: string | JSX.Element;
    onClick?: () => void;
}
export declare class DynaProgressBar extends React.Component<IDynaProgressBarProps> {
    static defaultProps: IDynaProgressBarProps;
    render(): JSX.Element;
}
