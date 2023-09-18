const path = require("path");

module.exports = {
    loadList: function (req, res) {
        res.render(path.join(__dirname, "../views/review/list"), { userID: req.session.userID, name: req.session.name, role: req.session.role });
    },

}