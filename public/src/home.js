const getTotalBooksCount = (books) => {
  return books.length
}

const getTotalAccountsCount = (accounts) => {
  return accounts.length
}

const getBooksBorrowedCount = (books) => {
  return books.filter((book) => {
    const [recent] = book.borrows
    return !recent.returned
  }).length
}

const sortBooks = (array) => {
  array.sort((entryA, entryB) => (entryA.count < entryB.count ? 1 : -1))
}

const getMostCommonGenres = (books) => {
  const genreList = {}
  for (let book of books) {
    const current = genreList[book.genre]
    current ? genreList[book.genre]++ : genreList[book.genre] = 1
  }
  const result = Object.keys(genreList).map((key) => {
    return { name: key, count: genreList[key] }
  })
  sortBooks(result)
  return result.slice(0,5)
}

const getMostPopularBooks = (books) => {
  const borrows = books.map(book=>({name:book.title, count:book.borrows.length}))
  return borrows.sort((bookA,bookB) => bookB.count - bookA.count).slice(0,5)
}

const getMostPopularAuthors = (books, authors) => {
  const result = []
  authors.forEach((author) => {
    const theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    }
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length
      }
    })
    result.push(theAuthor)
  })
  return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}
