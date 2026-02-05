import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { API_URL } from "../constants/config";

const useFetch = (params) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [refetch, setRefetch] = useState(false)

    const url = API_URL;

    useEffect(() => {
        if (!params) return;

        const fetchData = async () => {
            setStatus('loading');

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
                ...(params.method == "POST" && { body: JSON.stringify(params.body) })
            })

            const data = await response.json();
            setData(data);
            setStatus('loaded');
        };

        fetchData();
    }, [refetch]);

    return { status, data, refetch, setRefetch };
};

export default useFetch;