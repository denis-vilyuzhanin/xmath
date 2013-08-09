
if (!XMath) {
    XMath = require('xmath');
}


exports.matrix = {
    
    createFromArray: {
        singleDimension: {
            empty: function(test) {
                var VALUES = [1, 2, 3];
                var m = XMath.matrix(0, VALUES);
                test.ok(m);
                test.equal(m.dimensions().length, 0);
                test.done();
            },
            
            singleDimension: function(test) {
                var VALUES = [1, 2, 3];
                var m = XMath.matrix(1, VALUES);
                test.ok(m);
                test.equal(m.dimensions().length, 1);
                test.equal(m.length(0), 3);
                test.equal(m.get(), VALUES);
                test.equal(m.get(0), 1);
                test.equal(m.get(1), 2);
                test.equal(m.get(2), 3);
                
                test.done();
            },
            twoDimensions: function(test) {
                var VALUES = [
                    1, 2, 3,
                    4, 5, 6
                ];
                var m = XMath.matrix([2, 3], VALUES);
                test.equal(m.dimensions(), 2);
                
                test.equal(m.dimensions().length, 2);
                test.equal(m.length(0), 2);
                test.equal(m.length(1), 3);
                
                test.equal(m.get(), VALUES);
                test.equal(m.get([0, 0]), 1);
                test.equal(m.get([0, 1]), 2);
                test.equal(m.get([0, 2]), 3);
                test.equal(m.get([1, 0]), 4);
                test.equal(m.get([1, 1]), 5);
                test.equal(m.get([1, 2]), 6);
                
                test.done();
            },
            threeDimensions: function(test) {
                var VALUES = [
                    1,2,3,
                    4,5,6,
                    
                    7,8,9,
                    10,11,12
                ];
                var m = XMath.matrix([2, 2, 3], VALUES);
                test.equal(m.dimensions().length, 3);
                test.equal(m.length(0), 2);
                test.equal(m.length(1), 2);
                test.equal(m.length(1), 3);
                
                test.equal(m.get([0, 0, 0]), 1);
                test.equal(m.get([0, 0, 1]), 2);
                test.equal(m.get([0, 0, 2]), 3);
                test.equal(m.get([0, 1, 0]), 4);
                test.equal(m.get([0, 1, 1]), 5);
                test.equal(m.get([0, 1, 2]), 6);
                test.equal(m.get([1, 0, 0]), 7);
                test.equal(m.get([1, 0, 1]), 8);
                test.equal(m.get([1, 0, 2]), 9);
                test.equal(m.get([1, 1, 0]), 10);
                test.equal(m.get([1, 1, 1]), 11);
                test.equal(m.get([1, 1, 2]), 12);
                
                test.done();
            }
        },
        
        multiDimensionArray: {
            empty: function(test) {
                var VALUES = [1, 2, 3];
                var m = XMath.matrix(VALUES);
                test.ok(m);
                test.equal(m.dimensions().length, 0);
                test.done();
            },
            
            singleDimension: function(test) {
                var VALUES = [1, 2, 3];
                var m = XMath.matrix(VALUES);
                test.ok(m);
                test.equal(m.dimensions().length, 1);
                test.equal(m.length(0), 3);
                test.equal(m.get(), VALUES);
                test.equal(m.get(0), 1);
                test.equal(m.get(1), 2);
                test.equal(m.get(2), 3);
                
                test.done();
            },
            twoDimensions: function(test) {
                var VALUES = [
                    [1, 2, 3],
                    [4, 5, 6]
                ];
                var m = XMath.matrix(VALUES);
                test.equal(m.dimensions(), 2);
                
                test.equal(m.dimensions().length, 2);
                test.equal(m.length(0), 2);
                test.equal(m.length(1), 3);
                
                test.equal(m.get(), VALUES);
                test.equal(m.get([0, 0]), 1);
                test.equal(m.get([0, 1]), 2);
                test.equal(m.get([0, 2]), 3);
                test.equal(m.get([1, 0]), 4);
                test.equal(m.get([1, 1]), 5);
                test.equal(m.get([1, 2]), 6);
                
                test.done();
            },
            threeDimensions: function(test) {
                var VALUES = [
                    [[1,2,3],
                    [4,5,6]],
                    
                    [[7,8,9],
                    [10,11,12]]
                ];
                var m = XMath.matrix(VALUES);
                test.equal(m.dimensions().length, 3);
                test.equal(m.length(0), 2);
                test.equal(m.length(1), 2);
                test.equal(m.length(1), 3);
                
                test.equal(m.get([0, 0, 0]), 1);
                test.equal(m.get([0, 0, 1]), 2);
                test.equal(m.get([0, 0, 2]), 3);
                test.equal(m.get([0, 1, 0]), 4);
                test.equal(m.get([0, 1, 1]), 5);
                test.equal(m.get([0, 1, 2]), 6);
                test.equal(m.get([1, 0, 0]), 7);
                test.equal(m.get([1, 0, 1]), 8);
                test.equal(m.get([1, 0, 2]), 9);
                test.equal(m.get([1, 1, 0]), 10);
                test.equal(m.get([1, 1, 1]), 11);
                test.equal(m.get([1, 1, 2]), 12);
                
                test.done();
            }
        }
    }
    
};