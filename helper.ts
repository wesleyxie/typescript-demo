export enum Category { Biography, Poetry, Fiction, History, Children, Software }

export interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
}

export function getAllBooks(): Book[] {

  return [
    {
      id: 1,
      title: 'Ulysses',
      author: 'James Joyce',
      available: true,
      category: Category.Fiction
    }, {
      id: 2,
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
      category: Category.Fiction
    }, {
      id: 3,
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      available: true,
      category: Category.Poetry
    }, {
      id: 4,
      title: 'Moby Dick',
      author: 'Herman Melville',
      available: true,
      category: Category.Fiction
    }
  ];
}

export function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

  const allBooks = getAllBooks();
  const filteredTitles: string[] = [];

  for(let currentBook of allBooks) {
    if(currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }

  return filteredTitles;
}