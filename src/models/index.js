// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Book, Publisher, ISBN, Author, AuthorBook } = initSchema(schema);

export {
  Book,
  Publisher,
  ISBN,
  Author,
  AuthorBook
};