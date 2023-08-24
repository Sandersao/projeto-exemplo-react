/**
 * @param {string} platform 
 * @param {string} category 
 * @param {string} sortBy 
 */
class JogoFiltro {
    platform
    category
    sortBy
    constructor(platform = null, category = null, sortBy = null) {
        this.platform = platform
        this.category = category
        this.sortBy = sortBy
    }
}

module.exports = JogoFiltro