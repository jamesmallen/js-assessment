if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
			return arr.indexOf(item);
    },

    sum : function(arr) {
			var total = 0;
			for (var i in arr) {
				total += arr[i];
			}
			return total;
    },

    remove : function(arr, item) {
			var newArr = [];
			for (var i in arr) {
				if (arr[i] != item) {
					newArr.push(arr[i]);
				}
			}
			return newArr;
    },

    removeWithoutCopy : function(arr, item) {
			for (var i = arr.length - 1; i >= 0; i--) {
				if (arr[i] == item) {
					arr.splice(i, 1);
				}
			}
			return arr;
    },

    append : function(arr, item) {
			arr.splice(arr.length, 0, item);
			return arr;
    },

    truncate : function(arr) {
			arr.splice(arr.length -1, 1);
			return arr;
    },

    prepend : function(arr, item) {
			arr.splice(0, 0, item);
			return arr;
    },

    curtail : function(arr) {
			arr.splice(0, 1);
			return arr;	
    },

    concat : function(arr1, arr2) {
			var newArr = [];
			for (var i = 0; i < arr1.length; i++) {
				newArr.push(arr1[i]);
			}
			for (var i = 0; i < arr2.length; i++) {
				newArr.push(arr2[i]);
			}
			return newArr;
    },

    insert : function(arr, item, index) {
			arr.splice(index, 0, item);
			return arr;
    },

    count : function(arr, item) {
			sum = 0;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					sum++;
				}
			}
			return sum;
    },

    duplicates : function(arr) {
			var uniques = [];
			var dupes = [];
			
			for (var i = 0; i < arr.length; i++) {
				if (uniques.indexOf(arr[i]) >= 0) {
					if (dupes.indexOf(arr[i]) < 0) {
						dupes.push(arr[i]);
					}
				} else {
					uniques.push(arr[i]);
				}
			}
			
			return dupes;
    },

    square : function(arr) {
			for (var i = 0; i < arr.length; i++) {
				arr[i] *= arr[i];
			}
			return arr;
    },

    findAllOccurrences : function(arr, target) {
			var indexes = [];
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === target) {
					indexes.push(i);
				}
			}
			return indexes;
    }
  };
});
