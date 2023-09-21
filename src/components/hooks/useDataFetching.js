import {useEffect, useState} from "react";


const useDataFetching = (URL_SOURCE) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
            const data = await fetch(URL_SOURCE);
            const result = await data.json();

            if (result) {
                setData(result);
                setLoading(false);
            }
            } catch (e) {
                setLoading(false);
                setError(e.message)
            }
        }

        fetchData();
    },[URL_SOURCE])

return [loading, error, data]
}

export default useDataFetching;