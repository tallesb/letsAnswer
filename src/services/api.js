import axios from 'axios';

class Api {
  constructor() {
    const api = axios.create({
      baseURL: 'https://opentdb.com',
    });
    api.interceptors.response.use(this.handleSuccess, this.handleError);
    this.api = api;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/');
        break;
      case 404:
        this.redirectTo(document, '/404');
        break;
      default:
        this.redirectTo(document, '/500');
        break;
    }
    return Promise.reject(error);
  }

  get(path, callback) {
    return this.api
      .get(path)
      .then(response => callback(response.status, response.data));
  }
}

export default new Api();
