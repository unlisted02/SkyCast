import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';


export async function getCities() {
    const uid = localStorage.getItem('uid');

    const citiesCol = collection(db, 'Cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs
        .map(doc => doc.data())
        .filter(doc => doc.createdBy === uid);

    return cityList;
}

export async function checkIfCityAlreadyExist(cityName) {
    const uid = localStorage.getItem('uid');

    const citiesCol = collection(db, 'Cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs
        .map(doc => doc.data())
        .filter(doc => doc.createdBy === uid)
        .filter(doc => doc.name === cityName);

    return cityList.length > 0;
}


export async function addCity(cityData) {
    try {
        cityData.id = uuidv4();
        await addDoc(collection(db, "Cities"), cityData);
    } catch (error) {
        console.error('Error adding city:', error);
    }
}