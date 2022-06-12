export type QueryReturn<T, E = any> = {
	res: T | undefined;
	error: E | undefined;
};

export const query = async <T, E = any>(
	promise: T | Promise<T>,
): Promise<QueryReturn<T, E>> => {
	try {
		const res = await promise;
		return { res, error: undefined };
	} catch (error) {
		return { res: undefined, error: error as E };
	}
};
