"use client"

import { CharactersProps, SearchParamsProps } from "@/app/types";
import { updateSearchParams } from "@/app/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Episode {
    name: string;
}

async function fetchSeenin(url: string): Promise<Episode> {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

export default function Cards({ character }: CharactersProps) {
    const [episodeName, setEpisodeName] = useState<string | null>(null);

    const {
        name,
        status,
        species,
        location,
        image,
    } = character;

    useEffect(() => {
        async function loadEpisodeName() {
            const data = await fetchSeenin(character.episode[0]);
            setEpisodeName(data.name);
        }
        loadEpisodeName();
    }, [character.episode]);

    const router = useRouter();

    const handleUpdateParams = (data: SearchParamsProps) => {

        const newPathName = updateSearchParams(data);
        router.push(newPathName);
    };


    return (
        <article className=" w-[500px] h-[240px]  flex overflow-hidden bg-slate-700 rounded-lg shadow-md m-3  ">
            <div className="flex-2 w-full ">
                <Image src={image} alt={name} className="w-full h-full object-cover   " width={230} height={240} />
            </div>
            <div className="w-full relative  p-3 flex flex-col gap-y-4 flex-3">
                <h2 className="font-bol text-xl  ">
                    {name}
                </h2>
                <div className="flex items-center gap-1">
                    <div className={`${status == "Alive" ? "bg-green-500" : status === "unknown" ? "bg-orange-400" : "bg-rose-500"}  w-3  h-3 bg-green-500 rounded-full`} />
                    <div>
                        <button className="hover:text-orange-500" onClick={() => handleUpdateParams({ title: "status", value: status })}>{status}</button> -
                        <button className="hover:text-orange-500 ml-1" onClick={() => handleUpdateParams({ title: "species", value: species })}>{species}</button>
                    </div>
                </div>
                <div className="flex-col flex -start">
                    <span className="text-gray-400">
                        Last Known  Location:
                    </span>
                    <span >
                        {location?.name}
                    </span>
                </div>
                <div className="flex-col flex -start">
                    <span className="text-gray-400">
                        First seen in:
                    </span>
                    <div>
                        {episodeName}
                    </div>
                </div>
            </div>
        </article>
    )
}