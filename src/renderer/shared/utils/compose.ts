export const compose = (...funcs: Array<(props: any) => any>) =>
	funcs.reduce(
		(a, b) =>
			(...args) =>
				a(b(...args)),
		(arg) => arg,
	);
