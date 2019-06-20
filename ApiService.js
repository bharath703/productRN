const BASE_URL = "https://api2.shop.com/AffiliatePublisherNetwork/v2";

export default class ApiService {
  static getHeader() {
    return {
      "api_key": "0eac674b17d14f54bf07d7e1552eeb2d"
    };
  }

  static get(url, params) {
    let completeUrl = BASE_URL + url + "?";
    Object.keys(params).map((key) => completeUrl += params[key] + "&");
    return Promise((resolve, reject) => {
      fetch(completeUrl)
        .then((response) => response.json())
        .then((responseJson) => resolve(responseJson))
        .catch((error) => reject(error));
    });
  }
}