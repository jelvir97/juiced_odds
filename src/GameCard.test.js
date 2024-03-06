import { render, screen, waitFor, act } from '@testing-library/react';
import GameCard from "./GameCard"
import userEvent from '@testing-library/user-event';
import PredictionsContext from "./PredictionsContext"
import UserContext from "./UserContext"
import TrackedContext from './TrackedContext';

const testGame = {
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

const testPre = {
    "2023020990": {
        "gameID": "2023020990",
        "homeProbMoney": "0.37",
        "awayProbMoney": "0.672",
        "homeOddsMoney": "170",
        "awayOddsMoney": "-205",
        "homeProbModelMoney": "0.32",
        "awayProbModelMoney": "0.68",
        "homeOddsModelMoney": "213",
        "awayOddsModelMoney": "-213",
        "expectedRoiHomeMoney": "-0.136",
        "expectedRoiAwayMoney": "0.012"
    }
}


test('renders correctly', ()=>{
   
        render(

            <UserContext.Provider value={testUC}>
                <TrackedContext.Provider value={{tracked:testTracked, setTracked: ()=>{}}}>
                    <PredictionsContext.Provider value={testPre}>
                        <GameCard game={testGame}/>
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
                    <GameCard game={testGame}/>
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
                    <GameCard game={testGame}/>
                </PredictionsContext.Provider>
            </TrackedContext.Provider>
        </UserContext.Provider>

    )

    expect(await screen.findByText('TOR')).toBeInTheDocument()
    expect(await screen.findByText('BUF')).toBeInTheDocument()
})

test('correct text: predictions', async()=>{
    const user = userEvent.setup()
    render(

        <UserContext.Provider value={testUC}>
            <TrackedContext.Provider value={{tracked:testTracked, setTracked: ()=>{}}}>
                <PredictionsContext.Provider value={testPre}>
                    <GameCard game={testGame}/>
                </PredictionsContext.Provider>
            </TrackedContext.Provider>
        </UserContext.Provider>

    )
    const predictionsBtn = await screen.findByText('Predictions')
    await act(async()=>{
        await user.click(predictionsBtn)
    })

    expect(await screen.findByText('Money Line %')).toBeInTheDocument()
    expect(await screen.findByText('Model ML Odds')).toBeInTheDocument()
    expect(await screen.findByText('-0.136')).toBeInTheDocument()
    expect(await screen.findByText('-205')).toBeInTheDocument()
})