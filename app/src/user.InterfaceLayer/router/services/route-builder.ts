import RoutesPaths from "../routesPaths";

export const routeBuilder = (routes: RoutesPaths | RoutesPaths[]): string => {
	const isArray = Array.isArray(routes);
	const url = isArray ? routes.join("/") : routes;

	return `/${url}`;
};

export const routeBuilderWithReplace = (
	routes: RoutesPaths | RoutesPaths[],
	key: string,
	value: string | number
): string => {
	const url = routeBuilder(routes);

	return url.replace(`:${key}`, value.toString());
};
