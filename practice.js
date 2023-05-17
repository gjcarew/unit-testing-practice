function findRemainder(n1, n2) {
    return n1 % n2;
}
function startGPS(current, future) {
    if (current === future) {
        return "You are already at the ".concat(current, "!  Would you like to go somewhere else?");
    }
    ;
    return "Taking you from ".concat(current, " to ").concat(future, "!  Getting directions now!");
}
function createUser(fname, lname, bday, onlineStatus) {
    if (onlineStatus === void 0) { onlineStatus = false; }
    return {
        firstName: fname,
        lastName: lname,
        birthDate: bday,
        onlineStatus: onlineStatus
    };
}
function makePizza(pizza, newTopping) {
    pizza.cooked = true;
    if (pizza.toppings.length < 5) {
        pizza.toppings.push(newTopping);
    }
    return pizza;
}
module.exports = {
    findRemainder: findRemainder,
    startGPS: startGPS,
    createUser: createUser,
    makePizza: makePizza
};
