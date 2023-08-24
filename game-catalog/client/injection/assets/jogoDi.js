const Pagination = require("../../adapter/Pagination");
const HttpClient = require("../../adapter/httpClient");
const JogoConverter = require("../../converter/JogoConverter");
const JogoDao = require("../../dao/JogoDao");
const JogoService = require("../../service/JogoService")

module.exports = {
    makeJogoService: () => {
        console.log(
            
        );
        if(jogoService == undefined || jogoService.constructor.name){
            var httpClient = new HttpClient()
            var pagination = new Pagination()
            var jogoDao = new JogoDao(httpClient, pagination)
            var jogoConverter = new JogoConverter()
            var jogoService = new JogoService(jogoDao,jogoConverter)
        }
        return jogoService
    }
}