export const STYLES = {
	lineClamp: (number: number = 1) => {
		if (number === 1)
			return `
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			`;
		else
			return `
				display: -webkit-box;
				-webkit-line-clamp: ${number};
				-webkit-box-orient: vertical;
				overflow: hidden;
			`;
	},
};
