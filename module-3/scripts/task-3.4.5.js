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
    ],
    letsCook: function() {
        console.log("I'm hungry, let's cook " + favoriteRecipe.recipeName );
    }
}

favoriteRecipe.letsCook(); 
