var MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "milk": 0,
            "coffee": 18,

        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
};
var COINS = {
    "quarters": 0.25,
    "dimes": 0.10,
    "nickles": 0.05,
    "pennies": 0.01
};
var resources = {
    "water": 400,
    "milk": 200,
    "coffee": 100,
};



var earned_money = 0;
var is_on = true;

function  print_report(){
    prompt(`water: ${resources.water} , Milk: ${resources.milk} and coffee ${resources.coffee}`)
    //let resourse = document.getElementById("demo").innerHTML = `water: ${resources.water} , Milk: ${resources.milk} and coffee ${resources.coffee}`;
}

function check_resources(coffee){
    try {
        var needed_ingredients = MENU[coffee].ingredients;
    } catch {
        var comand = prompt("We don't have this in menu ✖️");
        return false;
    }


    var is_ingredients_enough = true;

    if ([needed_ingredients].water > resources.water){
        is_ingredients_enough = false;
        var comand = prompt("Sorry there is not enough water");
    }
    else if ([needed_ingredients].milk > resources.milk){
        is_ingredients_enough = false;
        var comand = prompt("Sorry there is not enough milk")
    }
    else if ([needed_ingredients].coffee > resources.coffee){
        is_ingredients_enough = false;
        var comand = prompt("Sorry there is not enough coffee");
    }
    return is_ingredients_enough;
}




function prossece_coins(coffee_amount){
   let quarters_count = prompt("how much quarters do you pay ?");
   let dimes_count = prompt("how much dimes do you pay ?");
   let nickles_count = prompt("how much nickles do you pay ?");
   let pennies_count = prompt("how much pennies do you pay ?");


   let sum_of_coins =  (quarters_count * COINS.quarters) + (dimes_count * COINS.dimes) + (nickles_count * COINS.nickles) + (pennies_count * COINS.pennies);


   if (sum_of_coins <= coffee_amount){
        print("Sorry that's not enough money. Money refunded.")
        return false
   }

   let return_result = sum_of_coins - coffee_amount;
    return return_result;
}


function make_coffee(coffee_name){

    resources.water -= MENU[coffee_name].ingredients.water;
    resources.milk -= MENU[coffee_name].ingredients.milk;
    resources.coffee -= MENU[coffee_name].ingredients.coffee;
    earned_money += MENU[coffee_name].cost;
}


while (is_on == true){

    var comand = prompt("What would you like? (espresso/latte/cappuccino):");

    if (comand == "report" ){
        print_report();
        continue;
    }
    else if (comand == "off"){
        is_on = false;
        continue;
    }

    is_supplies_enough = check_resources(comand)

    if  (!is_supplies_enough){
        continue;
    }

    var comand = prompt(MENU[comand].cost)
    process_result = prossece_coins(MENU[comand].cost)

    if (process_result == false){
        continue;
    }
    make_coffee(comand)
    prompt(`Here is ${process_result} in change. and Here is your ${comand} ☕️. Enjoy!`)

}