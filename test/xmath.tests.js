
if (typeof(XMath) == "undefined") {
    XMath = require('../src/xmath');
}


exports.matrix = {
    
    createFromArray: {
        singleDimension: {
            wrongSize: function(test) {
                test.expect(2);
                var VALUES = [1, 2, 3];
                try {
                    var m = XMath.matrix(0, 0, VALUES);
                } catch(e) {
                    test.ok(e);
                    test.equal(e.message, "Columns or rows number must be greater than 0 but was 0x0");
                }
                test.done();
            },
            
            _1x3: function(test) {
                var VALUES = [1, 2, 3];
                var m = XMath.matrix(1, 3, VALUES);
                test.ok(m);
                test.deepEqual(m.size(), {
                    rows: 1, columns: 3
                });
                test.deepEqual(m.toArray(), VALUES);
                test.equal(m.get(0, 0), 1);
                test.equal(m.get(0, 1), 2);
                test.equal(m.get(0, 2), 3);
                
                test.done();
            },
            _2x3: function(test) {
                var VALUES = [
                    1, 2, 3,
                    4, 5, 6
                ];
                var m = XMath.matrix(2, 3, VALUES);
                test.deepEqual(m.size(), {
                    rows: 2, columns: 3
                });
                test.deepEqual(m.toArray(), VALUES);
                test.equal(m.get(0, 0), 1);
                test.equal(m.get(0, 1), 2);
                test.equal(m.get(0, 2), 3);
                test.equal(m.get(1, 0), 4);
                test.equal(m.get(1, 1), 5);
                test.equal(m.get(1, 2), 6);
                
                test.done();
            },
            
            wrongArraySize: function(test) {
                test.expect(2);
                var VALUES = [
                    1,2,3,
                    4,5,6,
                ];
                try {
                    var m = XMath.matrix(3, 3, VALUES);
                    test.fail("Erro expected");
                } catch(e) {
                    test.ok(e)
                    test.equal(e.message, "Wrong array size. Expected=" + (2 * 3) + "but was " + (3 * 3));
                }
                test.done();
            }
        },
        
        twoDimensionArray: {
                        
            _1x3: function(test) {
                var VALUES = [1, 2, 3];
                var m = XMath.matrix(VALUES);
                test.ok(m);
                test.deepEqual(m.size(), {
                    rows: 1, columns: 3
                });
                test.deepEqual(m.toArray(), VALUES);
                test.equal(m.get(0, 0), 1);
                test.equal(m.get(0, 1), 2);
                test.equal(m.get(0, 2), 3);
                
                test.done();
            },
            _2x3: function(test) {
                var VALUES = [
                    [1, 2, 3],
                    [4, 5, 6]
                ];
                var m = XMath.matrix(VALUES);
                test.deepEqual(m.size(), {
                    rows: 2, columns: 3
                });
                test.deepEqual(m.toArray(), [1, 2, 3, 4, 5, 6]);
                
                test.equal(m.get(0, 0), 1);
                test.equal(m.get(0, 1), 2);
                test.equal(m.get(0, 2), 3);
                test.equal(m.get(1, 0), 4);
                test.equal(m.get(1, 1), 5);
                test.equal(m.get(1, 2), 6);
                
                test.done();
            }           
        }
    }
};