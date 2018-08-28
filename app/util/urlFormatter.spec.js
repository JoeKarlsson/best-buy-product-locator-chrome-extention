import {
  constructProductURL,
  constructStoreURL,
  constructUpcURL,
  constructNearestStoreMapUrl,
} from './urlFormatter';

describe('urlFormatter', () => {
  describe('constructProductURL', () => {
    it('should return the Best Buy Product API URL', () => {
      const modelNumber = 'UN55NU7100FXZA';
      const result = constructProductURL(modelNumber);
      const expectedResult = 'https://api.bestbuy.com/v1/products(modelNumber=UN55NU7100FXZA)?apiKey=undefined&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json';
      expect(result).toBe(expectedResult);
    });
  });

  describe('constructStoreURL', () => {
    it('should return the Best Buy Store API URL', () => {
      const zipCode = '55126';
      const miles = 5;
      const skuId = '55126';
      const result = constructStoreURL(skuId, zipCode, miles);

      const expectedResult = 'https://api.bestbuy.com/v1/stores((area(55126,5)))?apiKey=undefined&format=json';
      expect(result).toBe(expectedResult);
    });
  });

  describe('constructNearestStoreMapUrl', () => {
    it('should return the Best Buy Store nearest store URL', () => {
      const city = 'Richfeild';
      const region = 'FooBar';
      const lat = '123';
      const lng = '5678';

      const result = constructNearestStoreMapUrl(city, region, lat, lng);

      const expectedResult = `https://www.google.com/maps/search/Best+Buy+${city}+${region}/@${lat},${lng}`;
      expect(result).toBe(expectedResult);
    });
  });

  describe('constructUpcURL', () => {
    it('should return the Best Buy API UPC endpoint', () => {
      const upc = 1234;

      const result = constructUpcURL(upc);

      const expectedResult = 'https://api.bestbuy.com/v1/products(upc=1234)?apiKey=undefined&sort=inStoreAvailability.asc';
      expect(result).toBe(expectedResult);
    });
  });
});
