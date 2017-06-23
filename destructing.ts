import { Book, Category, getAllBooks } from './helper';



function printBookInfo({ title, author }: Book): void {
  console.log(`${title} was authored by ${author}`);
}

// let printBookInfo = ({ title, author }: Book): void => {
//   console.log(`${title} was authored by ${author}`);
// };

let [book1, book2] = getAllBooks();

printBookInfo(book1);
printBookInfo(book2);

let { title, author } = book1;
console.log(title);
console.log(author);

printBookInfo(book1);

function printBook1(): void {
  let {title, author} = this.book1;
  console.log(`${title} was authored by ${author}`);
}

printBook1();

let schoolBooks: Book[] = [
  {
    id: 10,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    available: true,
    category: Category.Fiction
  },
  {
    id: 11,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    available: true,
    category: Category.Fiction
  },
  {
    id: 12,
    title: 'Clear Light of Day',
    author: 'Anita Desai',
    available: true,
    category: Category.Fiction
  }
];

let booksRead: Book[] = getAllBooks();
booksRead.push(...schoolBooks);
console.log(booksRead);
