import { Ingredients, IIngredientCategory } from 'src/db/dataSet';

export default function IngredientsTable(): JSX.Element {
  return (
    <>
      <div className=" content-center">
        <div className="flex flex-col md:flex-row md:px-6 justify-items-center mx-auto">
          {Ingredients.map((ingrGroup: IIngredientCategory) => {
            return (
              <div key={ingrGroup.title} className="flex-auto">
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
  ingredients
}: IIngredientCategory): JSX.Element {
  return (
    <div className="  md:basis-1/4 m-2 rounded-xl">
      <div className="my- 2 p-4 uppercase text-3xl bg-base-300 rounded-md">
        <p>{title}</p>
      </div>
      <div>
        <ul>
          {ingredients?.map((ing: string, k: number) => {
            return (
              <li
                key={ing + String(k)}
                className="flex flex-row rounded-md my-1 p-2 bg-base-200 "
              >
                <span>
                  {' '}
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary mx-2"
                  />
                </span>
                {ing}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
