const BeerModel = require("../models/beer.model");

module.exports.getBeers = async (req, res) => {
    const beer = await BeerModel.find();
    res.status(200).json(beer);
};

module.exports.setBeers = async (req, res) => {
    if (!req.body.message) {
        return res.status(400).json({ message: "Merci d'ajouter un message" });
    }
    else if (!req.body.author) {
        return res.status(400).json({ author: "Merci d'ajouter un auteur" });
    }

    const beer = await BeerModel.create({
        message: req.body.message,
        author: req.body.author,
    });
    res.status(200).json(beer);
};

module.exports.editBeer = async (req, res) => {
    const beer = await BeerModel.findById(req.params.id);

    if (!beer) {
        res.status(400).json({ message: "Cette bière n'existe pas" });
    }

    const updateBeer = await BeerModel.findByIdAndUpdate(beer, req.body, {
        new: true,
    });

    res.status(200).json(updateBeer);
};

module.exports.deleteBeer = async (req, res) => {
    const beer = await BeerModel.findById(req.params.id);

    if (!beer) {
        res.status(400).json({ message: "Cette bière n'existe pas" });
    }
    await beer.deleteOne({ _id: beer })
    res.status(200).json("Message supprimé " + req.params.id);
};

module.exports.likeBeer = async (req, res) => {
    try {
        await BeerModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.dislikeBeer = async (req, res) => {
    try {
        await BeerModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { likers: req.body.userId } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};