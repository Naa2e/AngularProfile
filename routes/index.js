/*GET*/
exports.index = function(req, res){
  res.render('index', { title: "Nicole A", message: "Nicole's Profile Page"});
};

exports.partials = function(req, res){
  res.render('partials/' + req.params.name);
};
