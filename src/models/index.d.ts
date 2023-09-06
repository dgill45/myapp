import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly isbn?: ISBN | null;
  readonly publisherID: string;
  readonly authors?: (AuthorBook | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookIsbnId?: string | null;
}

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly isbn: AsyncItem<ISBN | undefined>;
  readonly publisherID: string;
  readonly authors: AsyncCollection<AuthorBook>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookIsbnId?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

type EagerPublisher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Publisher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly books?: (Book | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPublisher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Publisher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly books: AsyncCollection<Book>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Publisher = LazyLoading extends LazyLoadingDisabled ? EagerPublisher : LazyPublisher

export declare const Publisher: (new (init: ModelInit<Publisher>) => Publisher) & {
  copyOf(source: Publisher, mutator: (draft: MutableModel<Publisher>) => MutableModel<Publisher> | void): Publisher;
}

type EagerISBN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ISBN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyISBN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ISBN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ISBN = LazyLoading extends LazyLoadingDisabled ? EagerISBN : LazyISBN

export declare const ISBN: (new (init: ModelInit<ISBN>) => ISBN) & {
  copyOf(source: ISBN, mutator: (draft: MutableModel<ISBN>) => MutableModel<ISBN> | void): ISBN;
}

type EagerAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly books?: (AuthorBook | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly books: AsyncCollection<AuthorBook>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Author = LazyLoading extends LazyLoadingDisabled ? EagerAuthor : LazyAuthor

export declare const Author: (new (init: ModelInit<Author>) => Author) & {
  copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

type EagerAuthorBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthorBook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookId?: string | null;
  readonly authorId?: string | null;
  readonly book: Book;
  readonly author: Author;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthorBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthorBook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookId?: string | null;
  readonly authorId?: string | null;
  readonly book: AsyncItem<Book>;
  readonly author: AsyncItem<Author>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthorBook = LazyLoading extends LazyLoadingDisabled ? EagerAuthorBook : LazyAuthorBook

export declare const AuthorBook: (new (init: ModelInit<AuthorBook>) => AuthorBook) & {
  copyOf(source: AuthorBook, mutator: (draft: MutableModel<AuthorBook>) => MutableModel<AuthorBook> | void): AuthorBook;
}