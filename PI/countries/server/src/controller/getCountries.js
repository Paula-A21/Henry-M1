//importar la URL
const countriesGet = "countries";

axios.get(`${URL}/countries`)
    .then(({id, name, flags, continents, capital, subregion, area, population}) => {
        if(name){
            const country = {
                id, 
                name, 
                flags, 
                continents, 
                capital, 
                subregion: subregion?.name, 
                area: area, //chequear si hay área 
                population
            }

            return country;
        }

        return "Not found";
    })
    .catch((error) => error.mesagge)