function receivesAFunction(callBack){
    return callBack();

}

function returnsANamedFunction(){
    function namedFunction(){

    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function (){

    }
}