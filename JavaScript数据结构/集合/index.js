function Set () {
    var items = {};

    this.has = function (value) {
        // return value in items
        return items.hasOwnProperty(value);
    }

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items).length;
    }
    
    this.print = function () {
        console.log(items);
    }

    this.values = function () {
        return Object.keys(items);
    }

    this.union = function (otherSet) {
        var unionSet = new Set();
        var values = this.values();
        for (var i = 0,len = values.length;i<len;i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0, len = values.length;i<len;i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    this.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var values = this.values();
        for (var i = 0,len = values.length;i<len;i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    this.difference = function (otherSet) {
        var differenceSet = new Set();
        var values = this.values();
        for (var i =0,len=values.length;i<len;i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    this.subset = function (otherSet) {
        if (otherSet.size() < this.size()) {
            return fasle;
        } else {
            var values = this.values();
            for(var i = 0,len = values.length;i<len;i++){
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }


}