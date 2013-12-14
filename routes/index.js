
//mongod for mongoosejs on localhost


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'St.Albans Christian Assembly Site' });
};


exports.aboutus = function(req, res){
  res.render('aboutus', { title: 'About' });
};




exports.contact = function(req, res){
  res.render('contact', { title: 'Contact', email: "info@stalbans.org",  phone: "347222222"});
};

