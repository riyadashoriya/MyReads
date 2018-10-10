# MyReads
A Book Tracking App

This is a Book Tracking App using React for Udacity's Front End Nanodegree course. 

![alt text](https://github.com/riyadashoriya/MyReads/blob/master/MyReadsApp.png "MyReads App Preview")

## Working

To use the app right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Content
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Contains all the methods which connect with Backend.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Book.js # Represents a book on the shelf.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksList.js # UI to show all the books for each shelf type.
    ├── SearchBooks.js # Search the book, and move to different shelf.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the following methods to connect to backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelfValue)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelfValue: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License
The content and backend API is provided by Udacity.

