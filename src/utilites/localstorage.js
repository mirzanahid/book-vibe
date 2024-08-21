const getLocalHost = (dataName) => {
  const readBooks = localStorage.getItem(dataName);
  if (readBooks) {
    return JSON.parse(readBooks);
  }
  return [];
};

const removeLocalHost = (id, dataName) => {
  const booksData = getLocalHost(dataName);
  const remaining = booksData.filter((bookData) => bookData !== id);
  localStorage.setItem(dataName, JSON.stringify(remaining));
};

const saveLocalHost = (id, dataName) => {
  const readBooksData = getLocalHost(dataName);
  const exits = readBooksData.find((readBooks) => readBooks === id);

  if (!exits) {
    readBooksData.push(id);
    localStorage.setItem(dataName, JSON.stringify(readBooksData));
  }
};

export { getLocalHost, saveLocalHost, removeLocalHost };
