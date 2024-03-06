import {render, screen} from "@testing-library/react"
import PlayerStatsTable from "./PlayerStatsTable"

const testPlayer = {
    "playerId": 1,
    "headshot": "",
    "firstName": {
        "default": "test1"
    },
    "lastName": {
        "default": "test1"
    },
    "positionCode": "C",
    "gamesPlayed": 38,
    "goals": 1,
    "assists": 6,
    "points": 7,
    "plusMinus": 6,
    "penaltyMinutes": 33,
    "powerPlayGoals": 0,
    "shorthandedGoals": 0,
    "gameWinningGoals": 0,
    "overtimeGoals": 0,
    "shots": 46,
    "shootingPctg": 0.021739,
    "avgTimeOnIcePerGame": 1001.4474,
    "avgShiftsPerGame": 23.5263,
    "faceoffWinPctg": 0
}

test('renders', ()=>{
    render(
        <PlayerStatsTable player={testPlayer} />
    )
})

test('matches snapshot', ()=>{
    render(
        <PlayerStatsTable player={testPlayer} />
    )

    expect( screen.asFragment).toMatchSnapshot()
})

test('has correct text', async ()=>{
    render(
        <PlayerStatsTable player={testPlayer} />
    )

    expect(await screen.findByText('Shots')).toBeInTheDocument()
    expect(await screen.findByText('Games Played')).toBeInTheDocument()
    expect(await screen.findByText('Points')).toBeInTheDocument()
    expect(await screen.findByText('Penalty Mins')).toBeInTheDocument()
})