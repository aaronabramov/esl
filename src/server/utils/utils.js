module.exports = {
    /**
     * Assoc value into nested key sequence
     *
     * @param {Object} v to assoc
     * @param {Array,String} ks keys sequence array or
     * string separated by '/'
     *
     * assocIn({}, 'a/b/c', 5) // => {a: {b: {c: 5}}}
     */
    assocIn: function(obj, ks, v) {
        if (typeof ks === 'string') {
            ks = ks.split('/');
        }
        // base case
        if (ks.length === 1) {
            return obj[ks[0]] = v;
        }
        if (ks.length) {
            var k = ks.shift(),
                newObj = obj[k] || (obj[k] = {});
            // recur
            return module.exports.assocIn(newObj, ks, v);
        }
        throw new Error('key sequence is required');
    },
    /**
     * Same as assocIn but for getting value by nested key seq
     * @param {Object} obj
     * @param {Array,String} ks key sequence array or string separated by /
     */
    getIn: function(obj, ks) {
        if (typeof ks === 'string') {
            ks = ks.split('/');
        }
        // base case
        if (ks.length === 1) {
            return obj[ks[0]];
        }
        if (ks.length) {
            var k = ks.shift(),
                newObj = obj[k] || (obj[k] = {});
            // recur
            return module.exports.getIn(newObj, ks);
        }
        throw new Error('key sequence is required');
    }
}
