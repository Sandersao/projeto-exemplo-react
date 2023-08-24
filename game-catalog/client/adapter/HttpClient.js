module.exports = class HttpClient {
    get(url, data) {
        return fetch(`${url}?${this.toUrlEncode(data)}`)
            .then(response => {
                return response.json()
            })
    }
    post(url, data, getData) {
        return fetch(`${url}?${this.toUrlEncode(getData)}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: this.toUrlEncode(data)
        })
            .then(response => {
                response.json()
            })
    }
    toUrlEncode(data) {
        return Object
            .keys(data)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
            .join('&')
    }
}