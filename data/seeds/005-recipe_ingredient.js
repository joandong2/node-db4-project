exports.seed = async function (knex) {
    await knex("recipe_ingredient").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 5 },
        { recipe_id: 1, ingredient_id: 5, quantity: 1 },
    ]);
};
