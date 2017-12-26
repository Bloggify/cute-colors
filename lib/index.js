const Palettes = require("./palettes")

class CuteColors {

    /**
     * getColors
     * Gets the colors.
     *
     * @name getColors
     * @function
     * @static
     * @param {String} palette The palette name.
     * @param {Number} percentage A value between 0 and 1 representing the fetching coverage (e.g. `1` will select all the colors, `0.5` half of them and so on).
     * @returns {Object} An object containing the color names and their codes.
     */
    static getColors (palette, percentage) {
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
                , step = Math.round(hex.length / Math.round(hex.length * percentage))

            for (let i = hex.length - 1; i >= 0; i -= step) {
                values.push(hex[i])
            }

            return ret
        }, {})
    }

    /**
     * getPalettes
     * Returns an array of palette names.
     *
     * @name getPalettes
     * @function
     * @static
     * @returns {Array} The palette names.
     */
    static getPalettes () {
        return Object.keys(Palettes)
    }
}

module.exports = CuteColors
