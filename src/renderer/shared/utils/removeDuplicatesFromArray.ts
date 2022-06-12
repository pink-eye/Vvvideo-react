const filterNonUniqueBy = (
	arr: Array<Record<string, any>>,
	fn: (item1: any, item2: any, item3: any, item4: any) => boolean,
) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
