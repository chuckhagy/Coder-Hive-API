const EntityRepository = require("../respositories/EntityRepository");
const db = require("../../knex");

let voteRepository = new EntityRepository({
	entityName: "Vote",
	db: db
});

module.exports = voteRepository;
