import { serviceApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";



class MemberApiService {
    private readonly path: string;

    constructor(){
        this.path = serviceApi;
    }


public async loginRequest(login_data: any) {
    try {

    const result= await axios.post("http://localhost:3003/login", login_data, {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.geteral_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const member: Member = result.data.data;

    localStorage.setItem("member_data", JSON.stringify(member));
    return member;
    } catch (err: any) {
      console.log(`ERROR: loginRequest ${err.message}`);
      throw err;
    }
  }
}

export default MemberApiService

