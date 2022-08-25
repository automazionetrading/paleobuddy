import IngredientsTable from '@/components/IngredientsTable';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IIngredientCategory, Ingredients } from 'src/db/dataSet';

const Home: NextPage = () => {
  const [ricetta, setRicetta] = useState('');
  const [proteins, setProteins] = useState<string[]>([]);
  const [vegetables, setVegetables] = useState<string[]>([]);
  const [fats, setFats] = useState<string[]>([]);
  const [spices, setSpices] = useState<string[]>([]);

  const genera = () => {
    const protein: string = choice(proteins);
    const vegetable: string = choice(vegetables);
    const fat: string = choice(fats);
    const spice: string = choice(spices);

    let ricetta = `${protein} con ${vegetable.toLowerCase()}\nin ${fat.toLowerCase()} e ${spice.toLowerCase()}`;

    setRicetta(ricetta);
  };

  useEffect(() => {
    populateState(Ingredients);
    console.log(fats);
  }, [vegetables, proteins, fats, spices]);

  function populateState(Ingredients: IIngredientCategory[]) {
    Ingredients.map((ingrGroup: IIngredientCategory) => {
      switch (ingrGroup.name) {
        case 'vegetables':
          setVegetables(ingrGroup.ingredients);
          break;
        case 'fats':
          setFats(ingrGroup.ingredients);
          break;
        case 'proteins':
          setProteins(ingrGroup.ingredients);
          break;
        case 'spices':
          setSpices(ingrGroup.ingredients);
          break;

        default:
          break;
      }
    });
  }

  function choice(pool: string[]) {
    const randomElement = pool[Math.floor(Math.random() * pool.length)];
    return randomElement;
  }

  return (
    <>
      <div className="flex-col content-center align-center text-center ">
        <div className="my-4">
          <ThemeSwitcher />
        </div>
        <div className="header my-4 min-h-16">
          <h1 className="my-8 text-7xl">PALEO MEAL BUDDY</h1>
        </div>

        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-8"
          onClick={genera}
        >
          Crea un piatto paleo
        </button>
        <div className="border max-w-xl	 mx-auto my-8 rounded-xl bg-base-300 text-bold p-6 text-5xl">
          {ricetta || 'RISULTATI'}
        </div>
        <div className="prose mx-auto text-left">
          <h1 className="text-center">Come cucinare la ricetta</h1>
          <ol>
            <li>metti un po’ di olio in una padella</li>
            <li>soffriggi la carne inquest’olio</li>
            <li>
              se usi spezie forti come lo zenzero, collocale prima della carne
            </li>
            <li>
              se, invece, usi spezie delicate come il basilico, aggiungile
              quando il piatto sarà quasi pronto
            </li>
            <li>aggiungi le verdure</li>
            <li>mangia appena é cotto</li>
          </ol>
          <p>È in questo modo che cucino il 90% dei miei pasti</p>
        </div>
        <IngredientsTable />
      </div>
    </>
  );
};

export default Home;
