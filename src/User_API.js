

import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// User class with static methods
class User {

    static async trackNHL(gameID){
        const {status} = await axios.post(`${BASE_URL}/users/track/nhl_games/${gameID}`,{}, {withCredentials: true})
        return status;
    }
    
    static async untrackNHL(gameID){
        const {status} =  await axios.delete(`${BASE_URL}/users/track/nhl_games/${gameID}`, {withCredentials: true})
        return status
    }

}

export default User;