const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
    const products = await ProductModel.find();
    res.render("products/index", { products });
}

function show(req, res) {
    res.send("show single");
}

function make(req, res) {
    res.send("show form");
}

function create(req, res) {
    res.send("show form");
}

function update(req, res) {
    res.send("show form");
}

function destroy(req, res) {
    res.send("show form");
}

function edit(req, res) {
    res.send("show form");
}

module.exports = {
    index,
    show,
    make,
    create,
    update,
    destroy,
    edit
}