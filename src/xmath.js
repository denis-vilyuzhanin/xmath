

function DANDSOFT_ORG_XMATH() {
    
    /**
     * Matrix
     */
    function Matrix(size, values) {
        this._size = size;
        this._values = values;
    }    
    Matrix.prototype.size = function() {
        return this._size.clone();
    }
    Matrix.prototype.toArray = function() {
        return clone(this._values);
    }
    Matrix.prototype.get = function(row, column) {
        return this._values[this._offset(row, column)];
    }
    Matrix.prototype._offset = function(row, column) {
        return row * this._size.columns + column;
    }
    
    ////////////////////////////////////////
    /**
     * Size
     */
    function Size(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }
    Size.prototype.getTotalSize = function() {
        return this.rows * this.columns;
    }
    Size.prototype.toString = function() {
        return this.rows + "x" + this.columns;    
    }
    Size.prototype.clone = function() {
        return new Size(this.rows, this.columns);
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
    
    function assertSize(size, actualSize) {
        if (size.rows < 1 || size.columns < 1) {
            throw new Error('Columns or rows count must be greater than 0 but was ' + size);
        }
        if (size.getTotalSize() != actualSize) {
            throw new Error("Wrong array size. Expected=" + size.getTotalSize() + " but was " + actualSize);
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
        matrix: function(arg0, arg1, arg2) {
            if (arguments.length == 1) {
                var size = new Size(null, null);    
                var values = parseArray(size, arg0);
                return new Matrix(size, values);
            } else if (arguments.length == 3) {
                var size = new Size(arg0, arg1);
                assertSize(size, arg2.length);
                return new Matrix(size, clone(arg2));
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
