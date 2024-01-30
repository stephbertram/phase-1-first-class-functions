function receivesAFunction (callbackFn) {
    callbackFn();
}

function returnsANamedFunction () {
    return function namedFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}