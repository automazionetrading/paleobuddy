import { Ingredients, IIngredientCategory } from 'src/db/dataSet';

export default function IngredientsTable(): JSX.Element {
  return (
    <>
      <div className=" border border-emerald-600 content-center">
        <div className="flex justify-items-center border border-blue-500 mx-auto">
          {Ingredients.map((ingrGroup: IIngredientCategory, index: number) => {
            return (
              <div key={ingrGroup.title}>
                <IngredientColumn
                  title={ingrGroup.title}
                  name={ingrGroup.name}
                  ingredients={ingrGroup.ingredients}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function IngredientColumn({
  title,
  name,
  ingredients
}: IIngredientCategory): JSX.Element {
  return (
    <div className=" basis-1/4 m-2 rounded-xl">
      <div className="my- 2 p-4 uppercase text-3xl bg-base-300 rounded-md">
        <p>{title}</p>
      </div>
      <div>
        <ul>
          {ingredients?.map((ing: string, k: number) => {
            return <li className="rounded-md my-1 p-2 bg-base-200 ">{ing}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
