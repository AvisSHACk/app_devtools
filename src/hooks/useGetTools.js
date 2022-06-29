import { collection, db, onSnapshot } from "./../firebase/firebaseConfig";
import { useEffect, useState } from "react";

const useGetTools = () => {
    const [tools, cambiarTools] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'tools'), (snapshot) => {
            cambiarTools(snapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }))
        })
    }, [])



    return tools;
}
 
export default useGetTools;