module.exports.home = function(req, res, next) {
     res.json({message: "Welcome to DressStore application."});
}

module.exports.prd = function (req, res, next) {
     res.send("Welcome Products");
 }
