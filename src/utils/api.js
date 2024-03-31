
import httpServe from "@/utils/request";
let proxyUrl = '/service'
export function Login(data){
    return httpServe.request(
        {
            url:`${proxyUrl}/jssj/users/loginTmp`,
            method:'post',
            data
        }
    )
}
