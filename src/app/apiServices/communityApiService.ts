
import axios from "axios";
import { serviceApi } from "../../lib/config";
import { BoArticles, SearchArticleObj } from "../../types/boArticles";
import assert from "assert";
import { Definer } from "../../lib/Definer";

class CommunityApiService {
    private readonly path: string;

    constructor(){
        this.path = serviceApi;
    }

    public async getTargetArticles(data: SearchArticleObj): Promise<BoArticles[]>{
    try {

        // let url = `/community/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}`;
        let url = `/community/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}`;
        if(data.order) url += `&order=${data.order}`;

       const result =  await axios.get(this.path + url, {withCredentials: true});
           console.log("state: ", result.data.state);
            assert.ok(result?.data, Definer.general_err);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);

        const articles: BoArticles[] = result.data.data;
        return articles;
    } catch (err: any) {  
      console.log(`ERROR: createOrder ${err.message}`);
      throw err;
        
    }
        }
    }

export default CommunityApiService;