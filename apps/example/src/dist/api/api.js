import axios from 'axios';
import merge from 'lodash/merge';
class ApiQuotes {
    // @ts-ignore
    constructor(_ids, _config) {
        const config = merge({
            baseURL: 'https://back.webtemplates.space/api/trading',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer TJHrdoAT3v`,
            },
        }, _config);
        //
        this.ids = _ids;
        this.client = axios.create(config);
    }
    getSymbols() {
        return this.client.post('/symbols').then((response) => {
            var _a;
            const symbols = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.Symbols;
            console.log(symbols);
            return symbols;
        });
    }
}
export default ApiQuotes;
