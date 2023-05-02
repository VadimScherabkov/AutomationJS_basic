const axios = require("axios");
const {TEST_URL} = require("../config/endpoints");

const sendRequest = async (url, data = null, method = 'get') => {
    try {
        const responce = await axios({
            method,
            url: `${TEST_URL}/${url}`,
            headers: {},
            data
        });
        return {
            status: responce.status,
            data: responce.data
        };
    } catch (error) {
        return {
            status: error.response.status,
            statusText: error.response.statusText,
        };
    };
};

module.exports = {
    sendRequest
};
