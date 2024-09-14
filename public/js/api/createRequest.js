/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let { url, data, method, callback } = options;

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData;
    if (method === 'GET') {
        url += '?';
        for (let key in data) {
            url += key + '=' + data[key] + '&';
        }
        url.slice(0, -1);
    } else {
        for (let key in data) {
            formData.append(key, data[key]);
        }
    }
    xhr.open(method, url);
    xhr.addEventListener('load', () => {
        callback(null, xhr.response);
    });
    xhr.addEventListener('error', () => {
        callback(xhr.error, null);
    });
    xhr.send(formData);
}