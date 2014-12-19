var _ = require('lodash');
module.exports = function(v, k) {
  var f = {
    filtered: {
      query: {
        query_string: {
          query: "*"
        }
      },
      filter: {
        bool: {}
      },
      strategy: "leap_frog"
    }
  };


  if (Array.isArray(v)) {
    f.filtered.filter.bool.should = _.map(v, function(val) {
      var t = {}
      t[k] = val;
      return {
        term: t
      };
    });
  } else {
    var t = {}
    t[k] = v;
    f.filtered.filter.bool.must = [{
      term: t
    }];
  }
  return f;
};