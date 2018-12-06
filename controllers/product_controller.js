function index(req, res) {
    res.send("show all");
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