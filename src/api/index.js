import request from 'superagent';

class CryptrackerApi {
    constructor() {
        this.baseUrl = 'http://localhost:7990';
    }
    async totalWorth() {
        const resp = await request(`${this.baseUrl}/data/wallet-infos`);
        return resp.body;
    }
};

export default () => {
    return new CryptrackerApi();
};