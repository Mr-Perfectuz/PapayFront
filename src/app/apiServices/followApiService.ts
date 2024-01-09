
import axios from "axios";
import { serviceApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { FollowSearchObj, Follower, Following } from "../../types/follow";

class FollowApiService {
    private readonly path: string;

    constructor(){
        this.path = serviceApi;
    }


    public async getMemberFollowers(data: FollowSearchObj): Promise<Follower[]>{
    try {

        let url = `/follow/followers?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;
       const result =  await axios.get(this.path + url, {withCredentials: true});
           console.log("state: ", result.data.state);
            assert.ok(result?.data, Definer.general_err);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);

        const followers: Follower[] = result.data.data;
        return followers;
    } catch (err: any) {  
      console.log(`ERROR: getMemberFollowers ${err.message}`);
      throw err;
        
    }
        }

    public async getMemberFollowings(data: FollowSearchObj): Promise<Following[]>{
    try {

        let url = `/follow/followings?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;
       const result =  await axios.get(this.path + url, {withCredentials: true});
           console.log("state: ", result.data.state);
            assert.ok(result?.data, Definer.general_err);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);

        const following: Following[] = result.data.data;
        return following;
    } catch (err: any) {  
      console.log(`ERROR: getMemberFollowings ${err.message}`);
      throw err;
        
    }
        }

public async subscribe(mb_id: string): Promise<boolean> {
  try {
    let url = `/follow/subscribe`;
    const result = await axios.post(this.path + url, { mb_id: mb_id }, { withCredentials: true });
    
    console.log("Server Response:", result.data);
    console.log("Server State:", result.data.state);

    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    return result.data.data === "subscribed";
  } catch (err: any) {
    console.log(`ERROR: subscribe ${err.message}`);
    throw err;
  }
}


    public async unsubscribe(mb_id: string): Promise<boolean>{
    try {
        let url = `/follow/unsubscribe`;
       const result =  await axios.post(this.path + url, {mb_id: mb_id}, {withCredentials: true});
           console.log("state: ", result.data.state);
            assert.ok(result?.data, Definer.general_err);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);

         
        return result.data.data === "unsubscribed";
    } catch (err: any) {  
      console.log(`ERROR: unsubscribe ${err.message}`);
      throw err;
        
    }
        }


    }

export default FollowApiService;