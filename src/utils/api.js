import httpServe from "@/utils/http/httpServe";
export function Login(data){
    return httpServe.request(
        {
            url:`/api/auth/login`,
            method:'post',
            data
        }
    )
}
