import React from 'react';
import Cards from './components/cards';
import { getData } from './utils';
import { HomeProps } from './types';
import ResetButton from './components/reset-button';


export default async function Home({ searchParams }: HomeProps) {


  const allCharacters = await getData({
    status: searchParams.status || "",
    species: searchParams.species || ""
  });

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-24">
      <div className="w-full h-40 flex items-center justify-center  ">
        <h1 className="text-7xl font-extrabold">The Rick and Morty API</h1>
      </div>
      {searchParams &&
        <ResetButton />
      }
      <section className="bg-slate-900 text-white w-full h-full py-16 flex items-center justify-center">

        <div className="flex flex-wrap items-center justify-center ">
          {
            allCharacters?.map((item, index: number) => (
              <Cards character={item} key={index} />
            ))
          }
        </div>
      </section>
    </main>
  );
}

