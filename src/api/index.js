import axios from 'axios';

export const fetchData = async () => {
    try{
        const apiUrl = 'https://covid19.mathdro.id/api';
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData
    }catch(error){
        console.log(error);
    }
}