const Jogo = require("../model/Jogo")


module.exports = class JogoConverter {
    /**
     * Converte o jogo da request para o jogo da domain
     * @param {Object} jogoRequest 
     * @returns {Jogo}
     */
    jogoRequestParaJogo(jogoRequest) {
        let jogo = new Jogo()

        jogo.id = jogoRequest.id
        jogo.title = jogoRequest.title
        jogo.thumbnail = jogoRequest.thumbnail
        jogo.short_description = jogoRequest.short_description
        jogo.game_url = jogoRequest.game_url
        jogo.genre = jogoRequest.genre
        jogo.platform = jogoRequest.platform
        jogo.publisher = jogoRequest.publisher
        jogo.developer = jogoRequest.developer
        jogo.release_date = jogoRequest.release_date
        jogo.freetogame_profile_url = jogoRequest.freetogame_profile_url

        return jogo
    }
}