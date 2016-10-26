# Angular 1.5.x Dashboard Template

## Dependencies
- node
- npm
- bower

## Installing bower
`npm install -g bower`

## bower and npm
npm and bower init has already been run so we can save production and dev dependencies.
for simplicity, we will just use default dependencies in bower.

Install a new package using
`bower install angular-material --save`

Remove an existing package using
`bower uninstall angular-material --save`

## Getting started
```
npm install
bower install
```


## Angular Bindings
- = Two-way data binding. This means that if you update that variable in your component scope, the change will be reflected on the parent scope;
- < One-way bindings when we just want to read a value from a parent scope and not update it;
- @ This is for string parameters;
- & This is for callbacks in case your component needs to output something to its parent scope.
