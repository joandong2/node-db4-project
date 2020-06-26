exports.seed = async function (knex) {
    await knex("ingredients").insert([
        { name: "egg" },
        { name: "flour" },
        { name: "bread" },
        { name: "beef" },
        { name: "sugar" },
        { name: "butter" },
    ]);
};
