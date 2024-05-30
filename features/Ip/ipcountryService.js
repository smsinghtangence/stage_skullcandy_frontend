import axios from "axios"




// const [details, setDetails] = useState(null);

// const ipServices = () => {
//     fetch(
//         "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
//     )
//         .then(response => response.json())
//         .then(data => setDetails(data));
// };

const API_URL = process.env.API_URL





let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}


const fetchipcountry = async () => {

    const response = await axios.get( 'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572')
    return response.data
}


const ipcountryService = {
    fetchipcountry
}
export default ipcountryService