class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataError";
  }
}

const fetchProductCatalog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() < 0.8) {
          resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
          ]);
        } else {
          throw new DataError("Failed to fetch product catalog");
        }
      } catch (e) {
        reject(e);
      }
    }, 1500);
  });
};

const fetchProductReviews = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const reviews = [
                { productId: productId, content: "I love this product", rating: 5 },
                { productId: productId, content: "I hate this product", rating: 1 },
                { productId: productId, content: "Awesome product I love it", rating: 5 },
        ]
        if (Math.random() < 0.8) {
          resolve(reviews);
        } else {
          throw new NetworkError(
            `Failed to fetch reviews for product ID ${productId}`,
          );
        }
      } catch (e) {
        reject(e);
      }
    }, 1500);
  });
};

const fetchSalesReport = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const salesReport = { totalSales: 500, unitsSold: 5, averagePrice: 100 };
      if (Math.random() < 0.8) {
        resolve(salesReport);
      } else {
        reject("Failed to fetch sales report");
      }
    }, 1000);
  });
};

export {NetworkError, DataError, fetchProductCatalog, fetchProductReviews, fetchSalesReport}