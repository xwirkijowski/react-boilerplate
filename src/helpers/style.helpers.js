const parseStyleProp = (prop, style, prefix = null) => {
	if (!prop) return null;

	return (prop && Array.isArray(prop)) ? prop.map(c => {
		return style[`${(prefix) ? prefix : ''}${c}`];
	}) : style[`${(prefix) ? prefix : ''}${prop}`];
};

export {
	parseStyleProp
};