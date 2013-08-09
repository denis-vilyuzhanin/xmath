

function DANDSOFT_ORG_XMATH() {

    var isArray = Array.isArray ? Array.isArray : function(object) {
        return object && Object.prototype.toString.call(object) == '[object Array]';
    }
    
    
    function parseSingleDimensionArray(dimensions, values) {
        var expectedSize = 1; 
        for(var dimIndex in dimensions) {
            expectedSize *= dimensions[dimIndex];
        }
        if (expectedSize != values.length) {
            throw new Error("Wrong array size: expected=" + expectedSize);
        }
    }
    

    return {
        matrix: function(arg0, arg1) {
            if (arguments.length == 1) {
                
            } else if (arguments.length == 2) {
                return parseSingleDimensionArray(arg0, arg1);
            } else {
                throw new Error("Illegal arguments set. one or two are allowed");
            }
        }
    };
}


XMath = DANDSOFT_ORG_XMATH();