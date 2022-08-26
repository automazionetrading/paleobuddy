import IngredientsTable from '@/components/IngredientsTable';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import type { NextPage } from 'next';
import Link from 'next/link';
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

    const ricetta = `${protein} con ${vegetable.toLowerCase()}\nin ${fat.toLowerCase()} e ${spice.toLowerCase()}`;

    setRicetta(ricetta);
  };

  useEffect(() => {
    populateState(Ingredients);
    // console.log(fats);
  }, []);

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
          3;
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
        <div className="min-h-8 py-4 bg-base-300">
          produly coded by{' '}
          <Link href="https://www.facebook.com/dario.woollover/">
            D&apos;ario Woollover
          </Link>
        </div>
        <div className="my-4">
          <ThemeSwitcher />
        </div>
        <div className="header my-4 min-h-16">
          <h1 className="my-8 text-7xl ">
            <span className="block lg:inline">🍽️</span> PALEO MEAL BUDDY
            <span className="hidden lg:inline">🍽️</span>
          </h1>
        </div>

        <button className="btn btn-lg my-8" onClick={genera}>
          Crea un piatto paleo
        </button>
        <div className="flex align-center min-w-full place-content-center">
          <div className="border leading-relaxed max-w-xl text-secondary-focus my-8 rounded-xl m-2 bg-base-300 text-bold p-6 text-5xl">
            {ricetta || 'Schiaccia il bottone per eliminare la 🍝'}
          </div>
        </div>
        <div className="prose mx-auto my-8 text-left ">
          <h1 className="text-center">Come cucinare la ricetta</h1>
          <ol>
            <li>metti un po’ di olio (lardo) in una padella</li>
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
        <div className="divider">INGREDIENTI</div>
        <div className="flex place-content-center mt-4 ">
          <IngredientsTable />
        </div>
      </div>
    </>
  );
};

export default Home;
