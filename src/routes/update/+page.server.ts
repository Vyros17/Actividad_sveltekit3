import { redirect } from '@sveltejs/kit';
import { APIURL } from '../../stores/api_url';
export const load = async ({ url }: any) => {
    let id = url.searchParams.get('id');
    let data = await fetch(`${APIURL}/users/${id}`);
    let response = await data.json();
    return {
        response
    }
}


export const actions = {
    update: async ({ request,url }: any) => {
        let form = await request.formData();
        let id = url.searchParams.get('id');
        let name = form.get("name");
        let username = form.get("username");
        let email = form.get("email");

        let response = await fetch(`${APIURL}/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                "name": name,
                "username": username,
                "email": email
            })
        });
        if (response.ok) {
            redirect(302, "/?message=success");
        } else {
            redirect(302, "/?message=error");
        }
    }
}