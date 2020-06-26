exports.seed = async function (knex) {
    await knex("instructions").insert([
        {
            recipe_id: 1,
            order: 1,
            instruction: "beat eggs",
        },
        {
            recipe_id: 1,
            order: 2,
            instruction: "add sugar",
        },
    ]);
};
