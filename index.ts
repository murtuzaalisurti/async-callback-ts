import axios from "axios"

type responseType = {
    people: string,
    planets: string,
    films: string,
    species: string,
    vehicles: string,
    starships: string
}

const makeRequest = async(endpoint: string, callback: (jsonResponse: responseType | unknown) => any = (jsonResponse) => {}): Promise<responseType | unknown> => {
    try {
        const jsonResponse = await axios(endpoint)
        callback(jsonResponse.data)
        return jsonResponse.data
    } catch (error) {
        callback(error)
        return error
    }
}

(async() => {
    // console.log(await makeRequest("https://swpi.dev/api/?format=json"))
    // OR
    const response = await makeRequest("https://swapi.dev/api/?format=json", (response) => {
        console.log(response);       
    })
})()