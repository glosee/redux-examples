# Redux Examples

This repository is a series of examples of using Redux for demonstration purposes. These examples were written to show how redux works in different scenarios, and was used to give a presentation to the team at the company I work for.

Generally the examples are all a very basic Counter application. I plan to add more examples in the future, which may be more complicated than a Counter.

## Getting Started

1. `git clone` this repository
2. `npm install`
3. `npm run build` in one terminal window, and `npm run serve` in another (uses python's `SimpleHTTPServer`)
4. Check `http://localhost:8000/dist` in your browser


## Viewing the examples

The application has a different entry point (and build script) for each example. These can be found in the `entry-points` directory, where there is a small HTML file and either a JS or JSX file. Each example's build script uses `browserify` (and `babel`) to bundle up everything to a single JS file, and moves both that JS file and its corresponding HTML file to `dist/` for your viewing pleasure.

To understand each individual example, have a look at the entry-point JS file, which imports whatever is needed to run the application for that example.

### Vanilla

This example shows you how to use redux without react.

The vanilla example can be viewed at http://localhost:8000/dist/vanilla.html

### React Simple

This example shows you how to use redux with react, but without using the `react-redux` bindings. It updates the component using `store.getState()` directly.

This example can be viewed at http://localhost:8000/dist/react-simple.html

### React Advanced

This is the big one. This uses `react-redux` and the Smart/Dumb component paradigm. It is made up of several components.

This example can be viewed at The vanilla example can be viewed at http://localhost:8000/dist/react-advanced.html

## TODO

* Example with async actions (thunk and promises)
* Example using `redux-saga`
* Example using `combineReducers`
