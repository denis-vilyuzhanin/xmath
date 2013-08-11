

function DANDSOFT_ORG_XMATH() {
    
    /**
     * Matrix
     */
    function Matrix(sizes, values) {
        this._sizes = sizes;
        this._values = values;
    }    
    Matrix.prototype.dimensions = function() {
        return clone(this._sizes);
    }
    Matrix.prototype.length = function(dimensionIndex) {
        return this._sizes[dimensionIndex];
    }
    Matrix.prototype.toArray = function() {
        return clone(this._values);
    }
    Matrix.prototype.get = function(index) {
        assertIndex(index, this._sizes);
        return this._values[this._offset(index)];
    }
    Matrix.prototype._offset = function(index) {
        var offset = 0;
        var base = 1;
        for(var dim = this._sizes.length - 1; dim >= 0; dim--) {
            var dimIndex = index[dim];
            offset += dimIndex * base;
            base = base * this._sizes[dim];
        }
        return offset;
    }
    
    ////////////////////////////////////////
    
    var isArray = Array.isArray ? Array.isArray : function(object) {
        return object && Object.prototype.toString.call(object) == '[object Array]';
    }

    function clone(array) {
        return array.slice(0);
    }
    
    function assertIndex(index, dimensions) {
        assertIndexType(index);
        if(index.length != dimensions.length) {
            throw new Error("Index must contains the same values as dimensions count");    
        }        
    }
    
    function assertIndexType(index) {
        if (!isArray(index)) {
            throw new Error("Matrix expects Array object as index");
        }
    }
    
    function assertDimensionSizes(dimensions, actualSize) {
        var expectedSize = 1; 
        for(var dimIndex in dimensions) {
            expectedSize *= dimensions[dimIndex];
        }
        if (expectedSize != actualSize) {
            throw new Error("Wrong array size: expected=" + expectedSize);
        }    
    }
    
    function parseArray(sizes, array) {
        var values = [];
        var current = array;
        var stack = [{
            array: array,
            index: 0
        }];
        sizes.push(array.length);
        while(stack.length > 0) {
            var level = stack[stack.length - 1];
            if (level.index >= level.array.length) {
                stack.pop();
                continue;
            }
            var next = level.array[level.index++];
            if (isArray(next)) {
                if (stack.length >= sizes.length) {
                    sizes.push(next.length);
                } else {
                    //TODO: verify current array size
                }
                stack.push({
                    array: next,
                    index: 0
                });
            } else {
                values.push(next);
            }
        }
        return values;
    }

    return {
        matrix: function(arg0, arg1) {
            if (arguments.length == 1) {
                var sizes = [];    
                var values = parseArray(sizes, arg0);
                return new Matrix(sizes, values);
            } else if (arguments.length == 2) {
                assertDimensionSizes(arg0, arg1.length);
                return new Matrix(clone(arg0), clone(arg1));
            } else {
                throw new Error("Illegal arguments set. one or two are allowed");
            }
        }
    };
}

if (exports) {
    exports = DANDSOFT_ORG_XMATH();
    if (module && module.exports) {
        module.exports = exports;
    }
} else {
    XMath = DANDSOFT_ORG_XMATH();
}
