const findAccountById = (accounts, id) => {
  let found = accounts.find((account) => account.id === id)
  return found
}

const sortAccountsByLastName = (accounts) => {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  )
}

const getTotalNumberOfBorrows = (account, books) => {
  return books.reduce((acc, book) => {
    let borrowed = book.borrows
    borrowed.forEach((item) => {
      if (item.id == account.id) {
        acc++
      }
    })
    return acc
  }, 0)
}

const getBooksPossessedByAccount = (account, books, authors) => {
  let result = []
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      result.push(book)
    }
  })
  result.forEach((book) => {
    let anAuthor = authors.find((person) => person.id === book.authorId)
    book['author'] = anAuthor
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
}
