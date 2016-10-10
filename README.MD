Dashboard Template
#by Garrett Wong

To add jenkins build and integration.

* GIT Push hook to master branch.  Build is scheduled to run on http://dtmrjenkins.labspan.wdc.com:8080/.

# Dependencies
> Node (node)
> Node Package Manager (npm)
> Bower Package Manager (bower)
> SASS

## Installing bower package Manager
> npm install -g bower

## Using bower
bower init has already been run so we can save production and dev dependencies.
for simplicity, we will just use default dependencies in bower.

Install package using
> bower install angular-material --save

Remove package using
> bower uninstall angular-material --save

## Getting started
> npm install
> bower install


## Angular Bindings
> = Two-way data binding. This means that if you update that variable in your component scope, the change will be reflected on the parent scope;
> < One-way bindings when we just want to read a value from a parent scope and not update it;
> @ This is for string parameters;
> & This is for callbacks in case your component needs to output something to its parent scope.