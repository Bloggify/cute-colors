const Palettes = require("./palettes")

class CuteColors {

    /**
     * simplify
     *
     * @name simplify
     * @function
     * @param {Number} percentage A value
     */
    static simplify (palette, percentage) {
        // 0 1 2 3 4 5 6 7 8 9
        // 0   2   4   6   8
        //
        // length / percentage
        const colors = Palettes[palette]
        if (!colors) {
            throw new Error("Invalid palette name.")
        }

        return Object.keys(colors).reduce((ret, c) => {

            const values = ret[c] = []
                , hex = colors[c]
                , step = hex.length / Math.round(hex.length * percentage)

            for (let i = hex.length - 1; i >= 0; i -= step) {
                values.push(hex[i])
            }

            return ret
        }, {})
    }
}

module.exports = CuteColors
