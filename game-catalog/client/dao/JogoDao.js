const Pagination = require("../adapter/Pagination")
const HttpClient = require("../adapter/httpClient")

module.exports = class JogoDao {
    httpClient
    pagination
    /**
     * @param {HttpClient} httpClient 
     * @param {Pagination} pagination
     */
    constructor(httpClient, pagination) {
        this.httpClient = httpClient
        this.pagination = pagination
    }

    /**
     * @param {JogoFiltro} jogoFiltro
     * @returns {Object[]}
     */
    list(jogoFiltro) {
        let filtroList = {}
        if (jogoFiltro.plataforma) {
            filtroList.platform = jogoFiltro.plataforma
        }
        if (jogoFiltro.categoria) {
            filtroList.category = jogoFiltro.categoria
        }
        if (jogoFiltro.sortBy) {
            filtroList['sort-by'] = jogoFiltro.sortBy
        }
        const url = 'http://localhost:8082/api/games'
        return this
            .httpClient
            .get(
                url,
                filtroList
            )
    }
    
}