import axios from "axios";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/products";
import assert from "assert";

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serviceApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      const url = "/products";
      let result = await axios.post(this.path + url, data, { withCredentials: true });
      assert.ok(result, Definer.general_err);

      if (result.status !== 200) {
        throw new Error(`Request failed with status ${result.status}`);
      }

      console.log("state:", result.data.state);
      const products: Product[] = result.data.data;
      console.log("trend products:::", products)
      return products;
    } catch (err: any) {
      console.log(`ERROR: setTargetProducts ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
