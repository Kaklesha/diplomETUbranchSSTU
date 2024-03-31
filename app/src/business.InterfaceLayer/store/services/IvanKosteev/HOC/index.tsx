import React, { useState, useEffect } from "react";

interface Props {
	[key: string]: any;
}

interface DataFetchingProps<T> {
	data: T[];
	isLoading: boolean;
	error: Error | null;
}

function withDataFetching<T>(
	WrappedComponent: React.ComponentType<any>,
	fetchData: (props: Props) => Promise<T[]>
) {
	return function WithDataFetching(props: Props) {
		const [data, setData] = useState<T[]>([]);
		const [isLoading, setIsLoading] = useState(false);
		const [error, setError] = useState<Error | null>(null);

		useEffect(() => {
			const fetchDataAsync = async () => {
				setIsLoading(true);
				try {
					const result = await fetchData(props);
					setData(result);
				} catch (error: any) {
					setError(error);
				}
				setIsLoading(false);
			};
			fetchDataAsync();
		}, [props]);

		const dataFetchingProps: DataFetchingProps<T> = {
			data,
			isLoading,
			error,
		};

		return (
			<WrappedComponent
				{...props}
				{...dataFetchingProps}
			/>
		);
	};
}

export default withDataFetching;
