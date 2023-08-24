
const JogoConverter = require("../converter/JogoConverter")
const JogoDao = require("../dao/JogoDao")
const JogoFiltro = require("../filter/JogoFiltro")
const Jogo = require("../model/Jogo")

module.exports = class JogoService {
    jogoDao
    jogoConverter

    /**
     * @param {JogoDao} jogoDao 
     * @param {JogoConverter} jogoConverter 
     */
    constructor(jogoDao, jogoConverter) {
        this.jogoConverter = jogoConverter
        this.jogoDao = jogoDao
    }

    /**
     * @param {JogoFiltro} jogoFiltro
     * @returns {Jogo[]}
     */
    list(jogoFiltro) {
        let jogoList = this
            .jogoDao
            .list(jogoFiltro)
            .then((jogoList) => {
                return jogoList
                    .map(jogoRequest => {
                        return this
                            .jogoConverter
                            .jogoRequestParaJogo(jogoRequest)
                    })
            })
        return jogoList
    }

}