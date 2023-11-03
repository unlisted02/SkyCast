import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getCities() {
    const uid = localStorage.getItem('uid');
    const citiesCol = collection(db, 'Cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs
        .map(doc => doc.data())
        .filter(doc => doc.createdBy === "SkXRndFCV6aZLbiMKUuSbWD9n783");
    console.log(cityList);
    return cityList;
}