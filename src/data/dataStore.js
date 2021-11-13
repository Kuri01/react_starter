export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    logo: 'code',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export const faqData = {
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  title:
    'Incididunt culpa officia qui elit nisi sunt elit laboris excepteur qui laborum eu officia.',
  description:
    'Reprehenderit tempor cupidatat elit ipsum adipisicing id sint tempor do non. Cupidatat tempor sit nulla eu consectetur voluptate aliquip nulla ad ut incididunt dolor anim officia. Elit aliqua labore ea aliquip duis velit ullamco Lorem. Aliqua mollit excepteur cillum reprehenderit quis veniam sunt consequat qui. Quis ad voluptate non veniam non duis elit. Laborum nulla dolor irure Lorem esse officia consequat ipsum dolore sit qui veniam tempor.Eiusmod culpa non exercitation fugiat deserunt cupidatat reprehenderit aliquip est. Ipsum incididunt ad in commodo sint do. Dolore ex voluptate elit ea. Cillum ut et ullamco aliqua cillum aliqua anim commodo deserunt. Non laborum culpa minim fugiat minim consequat.',
};

export const infoData = {
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  title:
    'Qui qui laborum fugiat ea irure commodo consequat non non aliqua commodo aute.',
  description:
    'Aliquip nostrud eiusmod do est officia ea non reprehenderit quis. Adipisicing irure mollit adipisicing tempor. Veniam ut occaecat deserunt in duis magna adipisicing proident ex cillum proident officia tempor anim.Ex adipisicing irure esse est esse ipsum exercitation voluptate adipisicing qui quis. Cillum proident ipsum cupidatat cillum consequat ullamco proident quis voluptate excepteur esse. Ea aute commodo sit sint incididunt eiusmod Lorem qui aliquip minim. Deserunt officia exercitation sit incididunt sunt exercitation veniam esse eu enim amet. Quis esse labore nostrud amet velit.Exercitation aute deserunt irure et cupidatat voluptate enim laborum qui quis esse incididunt non. Dolor laborum ipsum magna do veniam sint eu et ut ea veniam. Laboris nulla id adipisicing consectetur id esse.Aute fugiat pariatur reprehenderit culpa velit do minim aliquip qui laboris dolor ea. Est deserunt ea incididunt cillum. Ad pariatur excepteur sit reprehenderit exercitation est pariatur culpa consectetur cillum. Consectetur nulla est tempor adipisicing adipisicing do proident elit anim ad est. In excepteur nulla tempor sit. Pariatur laborum ad tempor labore enim nulla.',
};

export default initialStoreData;
