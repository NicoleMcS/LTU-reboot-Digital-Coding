var favoriteRecipe = {
    recipeName: 'Banana Bread',
    Servings: 6,
    Ingredients: [
        '200gms flour', 
        '3 bananas', 
        '200gms brown sugar', 
        '100gms butter', 
        '1 tsp baking powder', 
        '1 tbsp speculoos', 
        'splash of milk' ],
    Directions: [
        'Step 1: ',
        'Step 2: '
    ]
}

//console.log( favoriteRecipe.recipeName );
//console.log( favoriteRecipe.Servings );
//console.log( favoriteRecipe.Ingredients);
//console.log )favoriteRecipe.Directions);

var ingredients = favoriteRecipe.Ingredients;

for(var index = 0; index < ingredients.length; index++ ) {
    console.log( ingredients[index] );
}