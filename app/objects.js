if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
			fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {

    },

    iterate : function(obj) {

    }
  };
});
