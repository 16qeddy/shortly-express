const models = require('../models');

const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {

    // console.log(req, 'this is the request');
    let cookies = req.headers.cookie;

    var parsedCookies = cookies.split('; ');

    //{ Object (shortlyid) }
    //{ Object (shortlyid, otherCookie, ...) }
    var returnObj = {};
    for (var i = 0; i < parsedCookies.length; i++) {
      var parsedCookie = parsedCookies[i].split('=');
      returnObj[parsedCookie[0]] = parsedCookie[1];
    }
    // [key, val, key, val, key , val]
    console.log(returnObj);
    req.cookies = returnObj;

    //res.cookie(returnObj);
    next();
  }
  // else {
  //   let cookieObj = {'shortlyid': 'blahlblahdlafsaldf'};
  //   models.Sessions.create(); // <-- ?
  //   res.send(cookieObj);
  //   next();
  // }
};

module.exports = parseCookies;