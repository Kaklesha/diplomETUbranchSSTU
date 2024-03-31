import React, { useState } from "react";

interface WithCategoryFilterProps<T> {
	items: T[];
	categoryKey: keyof T;
	categories: string[];
}

function withCategoryFilter<T extends { [key: string]: any }>(
	Component: React.ComponentType<WithCategoryFilterProps<T>>
) {
	return function WithCategoryFilter(props: WithCategoryFilterProps<T>) {
		const { items, categoryKey, categories } = props;
		const [selectedCategory, setSelectedCategory] = useState("");

		const filteredItems = selectedCategory
			? items.filter((item) => item[categoryKey] === selectedCategory)
			: items;

		return (
			<>
				<div>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</button>
					))}
				</div>
				<Component
					{...props}
					items={filteredItems}
				/>
			</>
		);
	};
}

export default withCategoryFilter;
