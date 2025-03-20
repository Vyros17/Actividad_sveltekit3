import { redirect } from '@sveltejs/kit';
import { APIURL } from '../../stores/api_url';
export const actions = {
    create:async ({request}:any) =>{
        let form = await request.formData();
        let name = form.get("name");
        let username = form.get("username");
        let email = form.get("email");

        let response = await fetch(`${APIURL}/users`,{
            method:"POST",
            body:JSON.stringify({
                "name":name,
                "username":username,
                "email":email
            })
        });
        if(response.ok){
            redirect(302,"/?message=success");
        }else{
            redirect(302,"/?message=error");
        }
    }
}