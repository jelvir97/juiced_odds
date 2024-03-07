

import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// NHL_API class with static methods
class NHL_API {
    /**
     * Gets current stats by default or by date if date string 'YYYY-MM-DD' passed in
     */
    static async getCurrentSchedule(date='now'){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/schedule?date=${date}`)
        return data;
    }

    /**
     * Gets list of all NHL teams
     */
    static async getTeamsList(){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/teams`)
        return data
    }

    /**
     * Gets standings data for all divisions
     */
    static async getStandings(){
        const {data} =  await axios.get(`${BASE_URL}/nhl-api/standings`)
        return data 
    }

    /**
     * Gets player stats by team. Team abbreviation must be passed in
     */
    static async getTeamStats(team){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/${team}/stats`)
        return data;
    }

    /**
     * Gets current spotlight players
     */
    static async getSpotlight(){
        const {data} = await axios.get(`${BASE_URL}/nhl-api/spotlight`)
        return data;
    }
    /**
     * Makes post request with list of ids. Gets back predictions for gameIDs
     */
    static async getGamePredictions(gameIDs){
        const {data} = await axios.post(`${BASE_URL}/nhl/predictions`, {gameIDs})
        return data
    }
    

}

export default NHL_API;