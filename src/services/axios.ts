import axios from 'axios';

export default class HttpService {
    public static get(baseUrl: string, targetUrl: string): Promise<any[] |> {
         axios({
            method: 'GET',
            url: `${baseUrl}${targetUrl}`
        }).then(res => res.data).catch(err => err)
    }
}