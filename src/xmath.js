

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
    Matrix.prototype.length = function() {
        
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
