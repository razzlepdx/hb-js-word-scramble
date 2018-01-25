> let greeting = "this is a greeting lol"
undefined
> "banana".split();
[ 'banana' ]
> "banana".split("");
[ 'b', 'a', 'n', 'a', 'n', 'a' ]
> ("banana".split("")).join();
'b,a,n,a,n,a'
> ("banana".split("")).join("");
'banana'
> Math.random("banana".split(""));
0.1641123142525931
> let bananaArray = "banana".split("");
undefined
> let i = Math.random(0, bananaArray.length);
undefined
> i
0.9672722518366568
> i = Math.floor(Math.random() * Math.floor(bananaArray.length));
2
> bananaArray[i]
'n'
> i = Math.floor(Math.random() * Math.floor(bananaArray.length));
2
> i = Math.floor(Math.random() * Math.floor(bananaArray.length));
5
> bananaArray[i]
'a'
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
// Do not need to subtract 1 from length because Math.random() does not include 1
4
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
4
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
4
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
4
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
4
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
3
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
0
> i = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
2
> let j = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
undefined
> j
2
> j = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
2
> j = Math.floor(Math.random() * Math.floor(bananaArray.length - 1));
4
> const iLetter = bananaArray[i]
undefined
> const jLetter = bananaArray[j]
undefined
> bananaArray[i] = jLetter
'n'
> bananaArray[j] = iLetter
'n'
> bananaArray
[ 'b', 'a', 'n', 'a', 'n', 'a' ]
> let candy = new Map([
... ["purple", "grape"],
... ["red", "apple"],
... ["green", "lime"],
... ["yellow", "lemon"],
... ["orange", "orange"]]);
undefined
// destructuring
> for (let [color, flavor] of candy) {
... console.log(`The ${flavor} is colored ${color}.`);}
The grape is colored purple.
The apple is colored red.
The lime is colored green.
The lemon is colored yellow.
The orange is colored orange.
undefined
> for (let [color, flavor] of candy) {
... console.log(`The ${flavor} flavor candy is ${color}.`);}
The grape flavor candy is purple.
The apple flavor candy is red.
The lime flavor candy is green.
The lemon flavor candy is yellow.
The orange flavor candy is orange.
undefined
> candy.get("red");
'apple'
> candy.get("blue");
undefined
> function flavorChecker(candy, color) {

    if (candy.get(color) === undefined) {
    console.log("Sorry, that color doesn't have a flavor.");
    } else {
        return candy.get(color);
    }
}
undefined
> flavorChecker(candy, "blue")
"Sorry, that color doesn't have a flavor."
undefined
> flavorChecker(candy, "red")
'apple'

function colorFlavors(colors) {
    let flavors = [];
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        if (candy.get(color) === undefined) {
            flavors.push(null);
        } else {
            flavors.push(candy.get(color));
        }
    }

    return flavors;
}
> colorFlavors(["blue", "red", "pink", "yellow"])
[ null, 'apple', null, 'lemon' ]