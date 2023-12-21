game.splash("lets calculate the cost of your pizza")
let Inches = game.askForNumber("How many inches do you want your pizza")
let Pizza = game.askForNumber("How many pizzas do you want")
let labour_cost = 0.75
let HST = 0.13
let materials = 0.5
let rent = 1
let subtotal = rent + materials * (Inches * Pizza) + labour_cost
subtotal = Pizza * subtotal
let tax = subtotal * HST
let total = subtotal + tax
game.splash("The total cost of your pizza is" + "")
