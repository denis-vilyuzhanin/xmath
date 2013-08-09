

function DANDSOFT_ORG_XMATH() {

    var isArray = Array.isArray ? Array.isArray : function(object) {
        return object && Object.prototype.toString.call(object) == '[object Array]';
    }
    
    function Matrix(dimensions, values) {
        this._dimensions = dimensions;
        this._values = values;
    }    
    Matrix.prototype.dimensions = function() {
        return this._dimensions.clone();
    }
    Matrix.prototype.length = function(dimensionIndex) {
        return this._dimensions[dimensionIndex];
    }
    Matrix.prototype.toArray = function() {
        return this._values.clone();
    }
    Matrix.prototype.get = function() {
        var index = arguments;
        assertIndex(index);
        var values = this._values;
        for(var dimIndex in index) {
            values = values[dimIndex];
        }
        return values;
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

    return {
        matrix: function(arg0, arg1) {
            if (arguments.length == 1) {
                
            } else if (arguments.length == 2) {
                assertDimensionSizes(arg0, arg1.length);
                return new Matrix(arg0, arg1.clone());
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
