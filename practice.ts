function findRemainder(n1: number, n2: number): number {
    return n1 % n2 
}

function startGPS(current: string, future: string): string {
    if (current === future) {
        return `You are already at the ${current}!  Would you like to go somewhere else?`
    };

    return `Taking you from ${current} to ${future}!  Getting directions now!`
}

function createUser(fname: string, lname: string, bday: string, onlineStatus: boolean = false) {
    return {
        firstName: fname,
        lastName: lname,
        birthDate: bday,
        onlineStatus: onlineStatus
    }
}



function makePizza(pizza:{toppings: string[], cooked: boolean}, newTopping: string) {
    pizza.cooked = true
    if (pizza.toppings.length < 5) {
        pizza.toppings.push(newTopping)
    }
    return pizza
}
module.exports = {
  findRemainder,
  startGPS,
  createUser,
  makePizza
}