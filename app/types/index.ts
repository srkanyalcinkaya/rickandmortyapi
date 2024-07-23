export interface FilterProps {
    status: string;
    species: string

}

export interface HomeProps {
    searchParams: FilterProps;
}


interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharactersProps {
    character: Character;
}



export interface SearchParamsProps {
    title: string;
    value: string;
}