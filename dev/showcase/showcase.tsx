import * as React from 'react';
import { DynaProgressBar, IDynaProgressBarProps } from "../../src";

import { faIcon, IShowcase } from "dyna-showcase";
import { Logo } from "../logo";

import "./showcase.less";

export default {
	logo: <Logo/>,
	views: [
		{
			slug: 'intro',
			faIconName: 'circle-o-notch',
			title: 'Introduction',
			center: true,
			component: (
				<div>
					<h3>dyna-ui-progress-bar</h3>
				</div>
			),
		},
		{
			slug: 'main-demo',
			faIconName: 'flask',
			title: 'the Progress bar',
			center: true,
			component: (
				<DynaProgressBar
					min={null}
					max={null}
					value={null}
				/>
			),
			wrapperStyle: {
				width: "100%",
				height: "40px",
			},
			props: [
				{
					slug: 'value-0',
					title: 'Value 0',
					props: {
						min: 0,
						max: 1000,
						value: 0,
						label: 'starting...',
					} as IDynaProgressBarProps
				},
				{
					slug: 'value-25',
					title: 'Value 25',
					props: {
						min: 0,
						max: 1000,
						value: 250,
						label: 'loading...',
					} as IDynaProgressBarProps
				},
				{
					slug: 'value-50',
					title: 'Value 50',
					props: {
						min: 0,
						max: 1000,
						value: 500,
						label: 'loading...',
					} as IDynaProgressBarProps
				},
				{
					slug: 'value-75',
					title: 'Value 75',
					props: {
						min: 0,
						max: 1000,
						value: 750,
						label: 'loading...',
					} as IDynaProgressBarProps
				},
				{
					slug: 'value-100',
					title: 'Value 100',
					props: {
						min: 0,
						max: 1000,
						value: 1000,
						label: 'completed',
					} as IDynaProgressBarProps
				},
			]
		},
		{
			slug: 'the-end',
			title: 'the end',
			description: 'Thank you',
			center: true,
			component: (
				<div style={{textAlign: 'center'}}>
					<h1>The end</h1>
					<div style={{fontSize: '20px'}}>
						<p><a href="https://github.com/aneldev/dyna-ui-progress-bar">{faIcon('github')} Github</a></p>
						<p><a href="https://www.npmjs.com/package/dyna-ui-progress-bar">{faIcon('square')} npm</a></p>
					</div>
				</div>
			),
		},
	]
}as IShowcase;
