import { render, screen, waitFor, act} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Schedule from "./Schedule"

import PredictionsContext from "./PredictionsContext"
import UserContext from "./UserContext"
import TrackedContext from './TrackedContext';

const testSchedule = [
    {
        "date": "2024-03-06",
        "dayAbbrev": "WED",
        "numberOfGames": 3,
        "games": [{
            "id": 2023020990,
            "season": 20232024,
            "gameType": 2,
            "venue": {
                "default": "Scotiabank Arena"
            },
            "neutralSite": false,
            "startTimeUTC": "2024-03-07T00:00:00Z",
            "easternUTCOffset": "-05:00",
            "venueUTCOffset": "-05:00",
            "venueTimezone": "America/Toronto",
            "gameState": "FUT",
            "gameScheduleState": "OK",
            "awayTeam": {
                "placeName": {
                    "default": "Buffalo"
                },
                "abbrev": "BUF",
            },
            "homeTeam": {
                "placeName": {
                    "default": "Toronto"
                },
                "abbrev": "TOR"
            }
        }
        ]
    }
]

const testTracked = ['2023020990']
const testUC = {
    user: {
        email: "test@test.com",
        firstName: "testFirst",
        lastName: "testLast",
        googleID : 'testID',
        nhlGames : ["2023020990"]
    }
}

const testPre = { }

test('renders', ()=>{
    render(
        <UserContext.Provider value={testUC}>
            <TrackedContext.Provider value={{tracked:testTracked, setTracked: ()=>{}}}>
                <PredictionsContext.Provider value={testPre}>
                    <Schedule schedule={testSchedule}/>
                </PredictionsContext.Provider>
            </TrackedContext.Provider>
        </UserContext.Provider>
    )
})

test('matches snapshot', ()=>{
    render(
        <UserContext.Provider value={testUC}>
            <TrackedContext.Provider value={{tracked:testTracked, setTracked: ()=>{}}}>
                <PredictionsContext.Provider value={testPre}>
                    <Schedule schedule={testSchedule}/>
                </PredictionsContext.Provider>
            </TrackedContext.Provider>
        </UserContext.Provider>
    )

    expect(screen.asFragment).toMatchSnapshot()
})

test('correct text', async()=>{
    render(
        <UserContext.Provider value={testUC}>
            <TrackedContext.Provider value={{tracked:testTracked, setTracked: ()=>{}}}>
                <PredictionsContext.Provider value={testPre}>
                    <Schedule schedule={testSchedule}/>
                </PredictionsContext.Provider>
            </TrackedContext.Provider>
        </UserContext.Provider>
    )

    expect( await screen.findByText('WED 03-06')).to
})