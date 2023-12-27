import { serviceApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";
import { MemberLiken } from "../../types/others";



class MemberApiService {
    private readonly path: string;

    constructor(){
        this.path = serviceApi;
    }


public async loginRequest(login_data: any) {
    try {

    const result= await axios.post(this.path + "/login", login_data, {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const member: Member = result.data.data;

    localStorage.setItem("member_data", JSON.stringify(member));
    return member;
    } catch (err: any) {
      console.log(`ERROR: loginRequest ${err.message}`);
      throw err;
    }
  }

public async signUpRequest(signup_data: any) {
    try {

    const result= await axios.post(this.path + "/signup ", signup_data, {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const member: Member = result.data.data;

    localStorage.setItem("member_data", JSON.stringify(member));
    return member;
    } catch (err: any) {  
      console.log(`ERROR: signUpRequest ${err.message}`);
      throw err;
    }
  }

public async logoutRequest() {
    try {

    const result= await axios.get(this.path + "/logout ", {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const logout_result = result.data.data;

    return logout_result === "success";
    } catch (err: any) {
      console.log(`ERROR: signUpRequest ${err.message}`);
      throw err;
    }
  }

public async memberLikeTarget(data: any) {
  try {
    const result = await axios.post(
      `${this.path}/member-liken`, data,   { withCredentials: true }
    );

    console.log("state:", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    console.log("state:", result.data.data);

    const like_result: MemberLiken = result.data.data;

    return like_result;
  } catch (err: any) {
    console.log(`ERROR: memberLikeTarget ${err.message}`);
    throw err;
  }
}
}


export default MemberApiService

