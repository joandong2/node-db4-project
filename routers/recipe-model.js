const db = require("../data/config");

//getRecipes(): should return a list of all recipes in the database.
//getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
//getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getRecipes() {
    return db("recipes").select("*");
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredient as ri")
        .join("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .where("ri.recipe_id", recipe_id)
        .select("r.name", "i.name", "ri.quantity");
}

function getInstructions(recipe_id) {
    return db("instructions as i")
        .join("recipes as r", "r.id", "i.recipe_id")
        .where("i.recipe_id", recipe_id)
        .select("i.order", "i.instruction")
        .orderBy("i.order", "ASC");
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
