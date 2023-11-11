MENU = {
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
}
COINS = {
    "quarters": 0.25,
    "dimes": 0.10,
    "nickles": 0.05,
    "pennies": 0.01
}
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}


def checkResources(theOrder):
    isNeededIngredients = True
    try:
        neededIngredients = MENU[theOrder]['ingredients']
        if neededIngredients['water'] > resources["water"]:
            print('sorry there is not enough water')
            isNeededIngredients = False 
        elif neededIngredients['milk'] > resources["milk"]:
            print('sorry there is not enough milk')
            isNeededIngredients = False 
        elif neededIngredients['coffee'] > resources["coffee"]:
            print('sorry there is not enough milk')
            isNeededIngredients = False 
    except:
        print("we dont have this option in our menu")
        isNeededIngredients = False
    return isNeededIngredients
order = ''
isOn = True
incomeMony = 0 
      
def makeCoffe(paymant, coffee):
    try:
        resources['milk'] -= MENU[order]['ingredients']['milk']
        resources['water'] -= MENU[order]['ingredients']['water']
        resources['milk'] -= MENU[order]['ingredients']['milk']
        incomeMony =+ paymant
        print(f"Here is ${int(paymant) - MENU[coffee]['cost'] } in change.")
        print(f"this is your {coffee} help your self")

    except:
        print(f"sorry something wrong happenned. here is your {paymant} refunded mony")
         
         
     
while isOn:
    order = input("What would you like? (espresso/latte/cappuccino): ")
    if order.lower == "off":
        print("got off")
        continue
    elif order.lower == "report":
        print(f"here we have {resources['water']}gr water, {resources['milk']}gr milk and {resources['coffee']} of coffee. and {incomeMony} money")
        continue
    else:
        
        isNeeded = checkResources(order)
        if isNeeded == False:
            continue
        if isNeeded:
            quarters = int(input("each quarters means 0.25. how many of it you wanna pay?"))
            dimes = int(input("each dimes means 0.10. how many dimes you pay?"))
            nickles = int(input("each nickles means 0.05. how many nickles you pay?"))
            pennies = int(input("each pennies means 0.01. how many pennies you pay?"))
            sumOfMoney = quarters * COINS['quarters'] + dimes * COINS['dimes'] + nickles * COINS['nickles'] + pennies * COINS['pennies']
            if sumOfMoney <= MENU[order]['cost']:
                print(f"sorry there is no enough coffee {sumOfMoney} refunded")
                continue
            else:
                makeCoffe(sumOfMoney, order)    