import { serviceApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member, MemberUpdateData } from "../../types/user";
import { MemberLiken } from "../../types/others";

class MemberApiService {
    private readonly path: string;
    constructor(){
        this.path = serviceApi;
    }

public async loginRequest(login_data: any): Promise<Member> {
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

public async signUpRequest(signup_data: any): Promise<Member> {
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

public async logoutRequest(): Promise<boolean> {
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

public async memberLikeTarget(data: any):  Promise<MemberLiken>{
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


public async getChosenMember(id: string):  Promise<Member>{
  try { 
        console.log("Start:");
    const result = await axios.get(`${this.path}/member/${id}`, { withCredentials: true }
    );
    console.log("state:", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    console.log("data:", result.data.data);

    const member: Member = result.data.data;

    return member;
  } catch (err: any) {
    console.log(`ERROR: getChosenMember ${err.message}`);
    throw err;
  }
}
public async updateMemberData(data: MemberUpdateData): Promise<Member>{
  try { 
    let formData = new FormData();
    formData.append("mb_nick", data.mb_nick || "");
    formData.append("mb_phone", data.mb_phone || "");
    formData.append("mb_adress", data.mb_adress || "");
    formData.append("mb_description", data.mb_description || "");
    formData.append("mb_image", data.mb_image || "");

    const result = await axios(`${this.path}/member/update`, {
      method: "POST",
      data: formData,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const member: Member = result.data.data;
       console.log("UpdateMember", member);
    localStorage.setItem("member_data", JSON.stringify(member))
    return member;

  } catch (err: any) {
    console.log(`ERROR: getChosenMember ${err.message}`);
    throw err;
  }
}


}


export default MemberApiService

