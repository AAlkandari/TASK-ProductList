exports.logger = (req, res, next) => {
console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
next()
};

exports.errorHandler = (err, req, res, next) => {
res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
};

exports.pathNotFound = (req, res) => {
res.status(404).json({message: "Path Not Found"})
};