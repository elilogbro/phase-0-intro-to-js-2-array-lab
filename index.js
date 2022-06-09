// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const prependCats = [name, ...cats];
    return prependCats;
}

function removeLastCat() {
    const lastCatRemoved = cats.slice(0, -1);
    return lastCatRemoved;
}

function removeFirstCat() {
    const firstCatRemoved = cats.slice(1);
    return firstCatRemoved;
}