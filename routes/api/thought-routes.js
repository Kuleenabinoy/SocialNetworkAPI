const router = require("express").Router();

const {
    getAllThought,
    addThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thought-controller");

// set up for GET all and POST at /api/thoughts
router.route("/").get(getAllThought).post(addThought);

// set up for GET one, PUT and DELETE at /api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// set up for POST and DELETE at /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
