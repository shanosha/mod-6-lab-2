import {NetworkError, DataError, fetchProductCatalog, fetchProductReviews, fetchSalesReport} from "./apiSimulator.js"

fetchProductCatalog()
    .then((products) => {
        console.log("Fetched Products:", products);
        const firstProductId = products[0].id;
        return fetchProductReviews(firstProductId); // returns a promise object
    })
    .then((reviews) => {
        console.log("Fetched Reviews:", reviews);
        return fetchSalesReport(); // returns a promise object
    })
    .then((sales) => {
        console.log("Fetched Sales:", sales);
    })
    .catch((e) => {
        if (e instanceof DataError) {
            console.error("There was a data error.", e);
        } else if (e instanceof NetworkError) {
            console.error("There was a network error.", e);
        } else {
            console.error(e)
        }
    })
    .finally(() => {
        console.log("API Calls Completed");
    });