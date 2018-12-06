const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
    const products = await ProductModel.find();
    res.render("products/index", { products });
}

async function show(req, res) {
    // const { id } = req.params;
    //const id = req.params.id //above syntax denotes id is coming off an object
    // const product = await ProductModel.findById(id);

    res.render("products/show", {product: req.product});
}

function make(req, res) {
    res.render("products/make");
}

async function create(req, res) {
    const { name, categories, price} = req.body;
    const product = await ProductModel.create({ name, categories, price });

    res.redirect(`/products/${product._id}`);
}

function update(req, res) {
    res.send("show form");
}

function destroy(req, res) {
    res.send("show form");
}

async function edit(req, res) {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    res.render("products/edit", { product });
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