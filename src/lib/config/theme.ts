export const themes = ['zinc', 'slate', 'stone', 'neutral'] as const;

export const defaultTheme: Theme = {
	name: themes[0],
	radius: 0.675
};

export type Theme = {
	name: ThemeName;
	radius: number;
};

export type ThemeName = (typeof themes)[number];
