import { redirect } from '@sveltejs/kit';
import { APIURL } from '../stores/api_url';
export const load = async () => {
    let data = await fetch(`${APIURL}/users`);
    let response = await data.json();
    return {
        response
    }
}

export const actions = {
    delete:async ({request}:any) =>{
        let form = await request.formData();
        let id = form.get("id");
        let response = await fetch(`${APIURL}/users/${id}`,{
            method:"DELETE"
        })
        if(response.ok){
            redirect(302,"/?message=success");
        }else{
            redirect(302,"/?message=error");
        }
    }
}