exports.seed = async function (knex) {
    await knex("recipes").insert([
        { name: "Lemon Cake" },
        { name: "Spaghetti" },
        { name: "Pork Ribs" },
        { name: "Cheeseburger" },
    ]);
};
