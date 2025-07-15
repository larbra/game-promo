import 'styled-components';

export const theme = {
	colors: {
		primary: '#8856D9',
		secondary: '#FF4136',
		sea: '#A9C7C7',
		white: '#FFF',
		grey: '#8C96A0',
		darkgrey: '#30373F',
		background: '#1B1F22',
	},
	media: {
		large: '(max-width: 1200px)',
		medium: '(max-width: 900px)',
		small: '(max-width: 600px)',
	},
};

export type Theme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme { }
} 