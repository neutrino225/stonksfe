/** @format */

import { writable } from "svelte/store";
import Filters from "../routes/Filters.svelte";

type Filter = {
	name: string;
	value: string;
};

const selectedFiltes = () => {
	const { subscribe, set, update } = writable([] as string[]);

	const addFilter = (filter: Filter) => {
		update((filters) => {
			filters.push(filter.value);
			return filters;
		});
	};

	const removeFilter = (value: string) => {
		update((filters) => {
			return filters.filter((filter) => filter !== value);
		});
	};

	const getSelectedFilters = () => {
		let filters = [] as string[];
		update((selectedFilters) => {
			filters = selectedFilters;
			return selectedFilters;
		});
		return filters;
	};

	return {
		subscribe,
		addFilter,
		removeFilter,
		getSelectedFilters,
	};
};

export const selectedFilters = selectedFiltes();
