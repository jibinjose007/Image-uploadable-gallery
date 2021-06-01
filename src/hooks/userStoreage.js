import {useState, UseEffect} from 'react';
import {projectStoreage, projectFirestore} from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {

        //refrences
        const storegeRef = projectStoreage.ref(file.name)

        storegeRef.put(file).on('state_changed',(snap)=>{
            //figuring progress
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        },(err)=>{
            setError(err);
        }, async ()=>{                  // fire-after fully uploaded 
            const url = await storegeRef.getDownloadURL();
            setUrl(url);
        })

    }, [file])
}