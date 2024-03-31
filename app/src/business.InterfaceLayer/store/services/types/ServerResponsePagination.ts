interface ServerResponsePagination<T> {
	count: number;
	pageCount: number;
	currentPage: number;
	total: number;
	statusCode: number;
	data: T;
}

export default ServerResponsePagination;
