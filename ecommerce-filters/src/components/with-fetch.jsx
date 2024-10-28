import React, { useEffect, useState } from 'react'

const withFetch = ({url}) => (WrappedComponent) => {

   const FetchComponent = () => {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[])

    return(
        <WrappedComponent data={data} loading={loading} error={error} />
    )
   }
   return FetchComponent;
}

export default withFetch