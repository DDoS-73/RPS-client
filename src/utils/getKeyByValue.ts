export const getKeyByValue = <T>(object: { [key: string]: T }, value: T) => {
	return Object.keys(object).find((key) => object[key] === value);
};
