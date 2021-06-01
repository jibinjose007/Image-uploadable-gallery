import {useState, UseEffect} from 'react';
import {projectStoreage, projectFirestore} from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
}