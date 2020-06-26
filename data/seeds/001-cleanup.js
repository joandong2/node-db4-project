exports.seed = async function (knex) {
    await knex("recipe_ingredient").truncate();
    await knex("ingredients").truncate();
    await knex("instructions").truncate();
    await knex("recipes").truncate();
};
