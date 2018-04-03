import * as React from "react";

import "./DynaProgressBar.less";

export interface IDynaProgressBarProps {
	className?: string;
	min: number;
	max: number;
	value: number;
	isLoading?: boolean;
	label?: string | JSX.Element;
	onClick?: () => void;
}

export class DynaProgressBar extends React.Component<IDynaProgressBarProps> {
	static defaultProps: IDynaProgressBarProps = {
		className: '',
		min: 0,
		max: 100,
		value: 50,
		isLoading: false,
		label: null,
		onClick: () => undefined,
	};

	public render(): JSX.Element {
		const {
			className: userClassName,
			min, max, value,
			isLoading,
			label,
		} = this.props;

		const className: string = [
			'dyna-progress-bar',
			'dyna-progress-bar__background',
			userClassName,
			`dyna-progress-bar__is-loading--${isLoading ? "active" : "inactive"}`,
		].join(' ').trim();

		let progressPercent: number = 100 * (value - min) / (max - min);
		if (progressPercent < 0) progressPercent = 0;
		if (progressPercent > 100) progressPercent = 100;

		return (
			<div className={className}>
				{progressPercent > 0 ? <div className="dyna-progress-bar__progress" style={{width: `${progressPercent}%`}}/> : null}
				<div className="dyna-progress-bar__label">{label}</div>
				<div className="dyna-progress-bar__is-loading">

				</div>
			</div>
		);
	}
}