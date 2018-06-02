import * as React from "react";
import { DynaLoadingGhost } from "dyna-ui-loading-ghost";

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

export class DynaProgressBar extends React.Component<IDynaProgressBarProps> {
	static defaultProps: IDynaProgressBarProps = {
		className: '',
		animationEnabled: true,
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
			animationEnabled,
			min, max, value,
			isLoading,
			label,
		} = this.props;

		let progressPercent: number = 100 * (value - min) / (max - min);
		if (progressPercent < 0) progressPercent = 0;
		if (progressPercent > 100) progressPercent = 100;

		const className: string = [
			userClassName,
			'dyna-progress-bar',
			'dyna-progress-bar__background',
		].join(' ').trim();

		const progressBarClassName: string = [
			"dyna-progress-bar__progress",
			Math.round(progressPercent) === 0 ? "zero-progress" : "",
		].join(' ').trim();

		const isLoadingClassName: string = [
			"dyna-progress-bar__is-loading",
			`dyna-progress-bar__is-loading--${isLoading ? "active" : "inactive"}`,
		].join(' ').trim();

		return (
			<div className={className}>
				<div className={progressBarClassName} style={{width: `${progressPercent}%`}}>
					{animationEnabled ? <DynaLoadingGhost className={isLoadingClassName}/> : null}
				</div>
				<div className="dyna-progress-bar__label">{label}</div>
			</div>
		);
	}
}
