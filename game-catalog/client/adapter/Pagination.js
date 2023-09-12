module.exports = class Pagination {
    start
    end
    constructor(page = 0, entriesPerPage = 10) {
        this.calcPagination(page, entriesPerPage)
    }

    paginate(dataStructure, page = 0, entriesPerPage = 10) {
        this.calcPagination(page, entriesPerPage)
        return dataStructure
            .slice(this.start, this.end)
    }

    calcPagination(page = 0, entriesPerPage = 10) {
        if(typeof entriesPerPage == 'string') {
            entriesPerPage = parseInt(entriesPerPage)
        }
        if(typeof page == 'string') {
            page = parseInt(page)
        }
        this.start = entriesPerPage * page
        this.end = this.start + entriesPerPage
    }
}