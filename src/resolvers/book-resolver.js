const bookResolver = {
  Query: {
    books: async (_, __, {models: {bookModel}}, info) => {
      const books = await bookModel.find().exec();
      console.log('Books: ', books);
      if (!books) console.log('No books found');
      return books;
    },
    book: async(_, {id}, {models: {bookModel}}) => {
      const book = await bookModel.findById({_id: id}).exec();
      if (!book) return 'Book not found';
      return book;
    }
  }
}

export default bookResolver;