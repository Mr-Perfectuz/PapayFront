import Cookie from "universal-cookie";
import { serviceApi } from "../../lib/config";


const cookie = new Cookie();
let member_data: any = null;
if(cookie.get("access_token")){
    const memberDataJson: any = localStorage.getItem("member_data") 
    ?  localStorage.getItem("member_data") : null;

    member_data = memberDataJson ? JSON.parse(memberDataJson) : null;

    if(member_data){
        member_data.mb_image = member_data.mb_image 
        ? `${serviceApi}/${member_data.mb_image}`
        : "/auth/user.svg";
    }
} else{
    localStorage.removeItem("member_data");
}

console.log("---verify---");
console.log(member_data);

export const verifierMemberData = member_data ? member_data : null;