import {useEffect, useState} from "react";

const useServiceHook = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define an async function to fetch data
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);

            // Check if the response is OK (status code in the range 200-299)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Call the async function
        fetchData().catch((e) => {
            setError(e.message)
        })

        // Cleanup function if the component using the hook is unmounted
        return () => {
            setLoading(false);
        };
    }, [url]);

    return {
        data,
        loading,
        error,
        fetchData
    }
}

export default useServiceHook
