import React from "react";

interface FilterProps<T> {
	data: T[];
	category: string;
}

export function withDataFiltering<T>(
	WrappedComponent: React.ComponentType<any>,
	filterData: (data: T[], category: string) => T[]
) {
	return function WithDataFiltering(props: FilterProps<T>) {
		const { data, category } = props;
		const filteredData = filterData(data, category);

		return (
			<WrappedComponent
				{...props}
				data={filteredData}
			/>
		);
	};
}
