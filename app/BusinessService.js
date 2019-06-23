import ApiService from "./ApiService";
import {CATEGORIES, PRODUCTS} from "./ApiRoutes";

export const getProductCategories = (locale, publisherId) => {
  return new Promise((resolve, reject) => {
    ApiService.get(CATEGORIES, {locale, publisherId})
      .then((response) => {

      })
      .catch((error) => reject(error));
  });
};

export const getProducts = (locale, publisherId, term) => {
  return new Promise((resolve, reject) => {
    ApiService.get(PRODUCTS, {locale, publisherId, term})
      .then((response) => resolve(response.products))
      .catch((error) => reject(error));
  });
};

export const getProductDetails = (locale, publisherId, productId) => {
  return new Promise((resolve, reject) => {
    ApiService.get(PRODUCTS + "/" + productId, {locale, publisherId})
      .then((response) => {

      })
      .catch((error) => reject(error));
  });
};