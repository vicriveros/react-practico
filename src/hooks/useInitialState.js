import { useState, useEffect } from "react";

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState( {mylist: [], trends: [], originals: []} ); //anadir a useState los valores de array que estamos esperando
    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);

    return videos;
}

export default useInitialState ;