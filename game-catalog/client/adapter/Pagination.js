module.exports = class Pagination {
    start
    end
    constructor(page, entriesPerPage = 10) {
        this.start = entriesPerPage * page
        this.end = this.start + entriesPerPage - 1
    }
}