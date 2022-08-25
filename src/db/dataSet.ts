export interface IIngredientCategory {
  name: string;
  title: string;
  ingredients: string[];
}

export const Ingredients: IIngredientCategory[] = [
  {
    name: 'proteins',
    title: 'proteine 🍖',
    ingredients: [
      'Petto di pollo',
      'Coscia di gallina',
      'Platessa',
      'Trota',
      'Sgombro',
      'Filetto di salmone',
      'Gamberetti',
      'Carne di manzo',
      'Carne macinata',
      'Costolette di vitello',
      'Spezzatino di carne di manzo',
      'Lombo di maiale',
      'Costolette di maiale',
      'Pancetta',
      'Arrosto di maiale',
      'Braciole di agnello',
      'Filetto di cervo'
    ]
  },
  {
    title: 'verdure 🥗',
    name: 'vegetables',
    ingredients: [
      'Asparagi',
      'Avocado',
      'Cuori di carciofo',
      'Cavoletti di Bruxelles',
      'Barbabietola',
      'Carote',
      'Sedano',
      'Zucchini',
      'Finocchio',
      'Cavolo verza',
      'Bietola',
      'Spinaci',
      'Patate dolci',
      'Peperone rosso',
      'Peperone giallo',
      'Peperone verde',
      'Cavolo verza'
    ]
  },
  {
    title: 'grassi 🥥',
    name: 'fats',
    ingredients: [
      'Olio di cocco',
      'Olio di oliva',
      'Olio di macadamia',
      'Olio di avocado',
      'Lardo'
    ]
  },
  {
    title: 'erbe e spezie 🌶️',
    name: 'spices',
    ingredients: [
      'Pepe della Jamaica',
      'Basilico',
      'Cardamomo',
      'Cannella',
      'Semi di sedano',
      'Aneto',
      'Aglio',
      'Zenzero',
      'Curry rosso',
      'Curry verde',
      'Curry giallo',
      'Origano',
      'Coriandolo',
      'Noce moscata',
      'Rosmarino',
      'Timo',
      'Foglie di alloro',
      'Sale',
      'Peperoncino in polvere',
      'Paprika',
      'Cumino',
      'Pepe nero'
    ]
  }
];