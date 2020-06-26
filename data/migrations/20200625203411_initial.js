exports.up = async function (knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id");
        table.text("name").notNull();
    });

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id");
        table
            .integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
            .onDelete("SET NULL")
            .onUpdate("CASCADE");
        table.integer("order").notNull();
        table.text("instruction").notNull();
        table.unique(["recipe_id", "order"]);
    });

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id");
        table.text("name").notNull();
    });

    await knex.schema.createTable("recipe_ingredient", (table) => {
        table
            .integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table
            .integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.integer("quantity").notNull();
        table.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("recipe_ingredient");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("instructions");
    await knex.schema.dropTableIfExists("recipes");
};
