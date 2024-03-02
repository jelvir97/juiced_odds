

import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// NHL_API class with static methods
class NHL_API {

    static async getCurrentSchedule(date='now'){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/schedule?date=${date}`)
        return data;
    }

    static async getTeamsList(){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/teams`)
        return data
    }

    static async getStandings(){
        const {data} =  await axios.get(`${BASE_URL}/nhl-api/standings`)
        return data 
    }

    static async getTeamStats(team){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/${team}/stats`)
        return data;
    }

    static async getSpotlight(){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/spotlight`)
        return data;
    }

    static async getGamePredictions(gameIDs){
        const {data} = await axios.post(`${BASE_URL}/nhl/predictions`, {gameIDs})
        return data
    }
    

}

export default NHL_API;