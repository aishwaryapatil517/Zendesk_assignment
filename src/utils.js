export const getToken = () =>{
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    return accessToken
}

export const getID = () =>{
    const url = window.location.href;
    const parts = url.split('/');
    const id = parts[parts.length - 1];
    return id

}