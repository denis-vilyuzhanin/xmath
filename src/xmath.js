

function DANDSOFT_ORG_XMATH() {

    var isArray = Array.isArray ? Array.isArray : function(object) {
        return object && Object.prototype.toString.call(object) == '[object Array]';
    }

    return {
        matrix: function(arg0, arg1) {
            var dimensions = null, values;
            if (arguments.length == 1) {
                values = arg0;
                dimensions = null;
            } else if (arguments.length == 2) {
                values = arg1;
                dimensions = arg0;
            } else {
                throw new Error("Illegal arguments set. one or two are allowed");
            }
        }
    };
}


XMath = DANDSOFT_ORG_XMATH();