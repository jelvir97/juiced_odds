

import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// User class with static methods
class User {
    /**
     * Calls server for user info. User info returned if authenticated
     */
    static async login(){
        try{
            const {data}= await axios.get(`${BASE_URL}/login/success`, {
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
       });

       return data
    }catch{
        return null
    }
    }

    /**
     * Function to logout of client and server.
     */
    static async logout(e, setUser){
        e.preventDefault()
        try{
            const resp = await axios.post(`${BASE_URL}/logout`, {},{
            withCredentials: true,
            headers: {
            Accept: "application/json",
              "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          }
          })
          if(resp.status === 200) setUser({})
        }catch(err){
          console.log(err)
        }
      }
    
    /**
     * Saves game ID as tracked game on server/db
     */
    static async trackNHL(gameID){
        const {status} = await axios.post(`${BASE_URL}/users/track/nhl_games/${gameID}`,{}, {withCredentials: true})
        return status;
    }
    
    /**
     * Removes game ID as tracked game on server/db
     */
    static async untrackNHL(gameID){
        const {status} =  await axios.delete(`${BASE_URL}/users/track/nhl_games/${gameID}`, {withCredentials: true})
        return status
    }

}

export default User;