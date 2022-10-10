var module = function(too){
    var mod;
    if(too < 0) mod = -too
    else mod = too;

    return mod;
}

var addModules = function(x, y, z){
    var niilber = module(x) + module(y) + module(z);
    return niilber;
}

var sum = addModules(56, -10, -20);
console.log(sum);