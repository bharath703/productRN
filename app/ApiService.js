const BASE_URL = "https://api2.shop.com/AffiliatePublisherNetwork/v2";

export default class ApiService {
  static getHeader() {
    return {
      "api_key": "0eac674b17d14f54bf07d7e1552eeb2d"
      // "api+key": "9c4dde015fe2413c99deeec226b88bcd"


    };
  }

  static get(url, params) {
    let completeUrl = BASE_URL + url + "?";
    Object.keys(params).map((key) => completeUrl += (`${key}=${params[key]}&`));
    console.log(completeUrl);
    return new Promise((resolve, reject) => {
      fetch(completeUrl, { headers: this.getHeader() })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          return resolve(responseJson)
        })
        .catch((error) => reject(error));
    });
  }
}