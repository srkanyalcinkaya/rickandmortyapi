import { FilterProps, SearchParamsProps } from "../types";


export async function getData(filters: FilterProps) {
    const { status, species } = filters;

    const response = await fetch(
        `https://rickandmortyapi.com/api/character/?species=${species}&status=${status}`);

    const result = await response.json();

    return result.results;
}


export const updateSearchParams = (data: SearchParamsProps) => {
const searchParams = new URLSearchParams(window.location.search);

   searchParams.set(data.title, data.value);
const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};



