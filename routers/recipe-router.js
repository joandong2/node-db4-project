const express = require("express");
const Recipes = require("./recipe-model.js");
const router = express.Router();

router.get("/", async (req, res, next) => {
    Recipes.getRecipes()
        .then((recipes) => {
            res.json(recipes);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get schemes" });
        });
});

router.get("/:id/shoppingList", async (req, res, next) => {
    Recipes.getShoppingList(req.params.id)
        .then((ingredients) => {
            //console.log(ingredients);
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get ingredients" });
        });
});

router.get("/:id/instructions", async (req, res, next) => {
    Recipes.getInstructions(req.params.id)
        .then((instructions) => {
            //console.log(ingredients);
            res.json(instructions);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get ingredients" });
        });
});

module.exports = router;
