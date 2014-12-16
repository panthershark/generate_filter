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

  var t = {}
  t[k] = v;

  if (Array.isArray(v)) {
    f.filtered.filter.bool.should = _.map(v, function(val) {
      return {
        term: t
      };
    });
  } else {
    f.filtered.filter.bool.must = [{
      term: t
    }];
  }
  return f;
};