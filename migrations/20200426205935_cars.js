
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        // table.integer("id").notNull().primary()
        table.increments("id")
        table.text("VIN").notNull().unique()
        table.integer("mileage").notNull()
        table.text("make").notNull()
        table.text("model").notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
