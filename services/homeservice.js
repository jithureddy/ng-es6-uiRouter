export default class HomeService {
    constructor($http) {
        this.$http = $http;
    }
    loadGifsJSON() {
        return this.$http.get('http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week');
    }
}