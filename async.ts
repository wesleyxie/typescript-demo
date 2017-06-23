import { Category, getBookTitlesByCategory } from './helper';

//**********************************************************
// Callbacks demo

// interface LibMgrCallback {
// 	(err: Error, titles: string[]): void;
// }
//
// function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {
//
// 	setTimeout(() => {
// 		try {
// 			let foundBooks: string[] = getBookTitlesByCategory(cat);
//
// 			if(foundBooks.length > 0) {
// 				callback(null, foundBooks);
// 			}
// 			else {
// 				throw new Error('No books found.');
// 			}
// 		} catch (error) {
// 			callback(error, null);
// 		}
// 	}, 2000);
// }
//
// function logCategorySearch(err: Error, titles: string[]): void {
// 	if(err) {
// 		console.log(`Error message: ${err.message}`);
// 	}
// 	else {
// 		console.log(`Found the following titles:`);
// 		console.log(titles);
// 	}
// }
//
//
// console.log('Beginning search...');
// getBooksByCategory(Category.Fiction, logCategorySearch);
// console.log('Search submitted...');

//**********************************************************
// Promises demo

// function getBooksByCategory(cat: Category): Promise<string[]> {
//
//   return new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//       let foundBooks: string[] = getBookTitlesByCategory(cat);
//
//       if (foundBooks.length > 0) {
//         resolve(foundBooks);
//       }
//       else {
//         reject('No books found for that category.');
//       }
//     }, 2000);
//   });
// }
//
// console.log('Beginning search...');
// getBooksByCategory(Category.Biography)
// 	.then(titles => {
//     // throw 'something bad happened';
//     console.log(`Found titles: ${titles}`);
// 		return titles.length;
// 	})
// 	.then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
// 	.catch(reason => console.log(`Error: ${reason}`));
// console.log('Search submitted...');

//**********************************************************
// async/await demo


function getBooksByCategory(cat: Category): Promise<string[]> {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      let foundBooks: string[] = getBookTitlesByCategory(cat);

      if (foundBooks.length > 0) {
        resolve(foundBooks);
      }
      else {
        reject('No books found for that category.');
      }
    }, 2000);
  });
}

async function logSearchResults(bookCategory: Category) {
  let foundBooks = await getBooksByCategory(bookCategory);
  console.log(foundBooks);
}

console.log('Beginning search...');
logSearchResults(Category.Fiction)
  .catch(reason => console.log(reason));
console.log('Search submitted...');