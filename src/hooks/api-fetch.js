import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../constants/config";

const apiFetch = async (params) => {
    const url = API_URL;
    if (!params) return;

    let headers = undefined;

    if (params.auth) {
        let user = await AsyncStorage.getItem("user");
        let { token } = await JSON.parse(user);

        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    }
    else {
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(url + params.endpoint, {
        headers: headers,
        method: params.method,
        ...(params.method == "POST" && { body: JSON.stringify(params.body) }),
        ...(params.method == "PUT" && { body: JSON.stringify(params.body) })
    })

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default apiFetch;