const findAuthorById = (authors, id) => {
  let found = authors.find((author) => author.id === id)
  return found
}

const findBookById = (books, id) => {
  let found = books.find((book) => book.id === id)
  return found
}

const partitionBooksByBorrowedStatus = (books) => {
  let array = []
  let checkedOut = books.filter((book) => !book.borrows[0].returned)
  let checkedIn = books.filter((book) => book.borrows[0].returned)
  array.push(checkedOut, checkedIn)
  return array
}

const getBorrowersForBook = (book, accounts) => {
  let result = []
  let borrowArray = book.borrows
  borrowArray.forEach((borrow) => {
    let account = accounts.find((acc) => acc.id === borrow.id)
    let obj = account
    obj['returned'] = borrow.returned
    result.push(obj)
  })
  return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
}
