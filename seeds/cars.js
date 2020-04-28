exports.seed = async function(knex) {
    await knex("cars").truncate()

    await knex("cars").insert([
      { id: 1, VIN: "D49H863KJ458736F8", mileage: 74650, make: "Chevrolet", model: "Trailblazer" },
      { id: 2, VIN: "J38D7F895J5Y3NB68", mileage: 35479, make: "Jeep", model: "Patriot" },
      { id: 3, VIN: "3J56G2V4J6H765MN4", mileage: 64379, make: "Honda", model: "Civic" },
      { id: 4, VIN: "K2J7N953VN46J7NHL", mileage: 4379, make: "Scion", model: "TC" },
      { id: 5, VIN: "K246BMFD4V554F78B", mileage: 1208976, make: "Ford", model: "F150" },
    ])
};  