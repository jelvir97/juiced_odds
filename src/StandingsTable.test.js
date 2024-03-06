import {render, screen} from "@testing-library/react"
import StandingsTable from "./StandingsTable"

const testDivision = [{
    "gamesPlayed": 63,
    "goalAgainst": 176,
    "goalFor": 224,
    "losses": 17,
    "points": 85,
    "streakCode": "W",
    "streakCount": 1,
    "teamName": {
        "default": "test-team-1",
    },
    "teamAbbrev": {
        "default": "tt1"
    },
    "ties": 0,
    "wins": 39
},{
    "gamesPlayed": 6,
    "goalAgainst": 17,
    "goalFor": 22,
    "losses": 1,
    "points": 8,
    "streakCode": "L",
    "streakCount": 2,
    "teamName": {
        "default": "test-team-2",
    },
    "teamAbbrev": {
        "default": "tt2"
    },
    "ties": 1,
    "wins": 3
}]

test('renders',()=>{
    render(
        <StandingsTable division={testDivision} />
    )
})

test('matches snapshot', ()=>{
    render(
        <StandingsTable division={testDivision} />
    )

    expect(screen.asFragment).toMatchSnapshot()
})

test('correct text', async()=>{
    render(
        <StandingsTable division={testDivision} />
    )

    expect(await screen.findByText('test-team-1')).toBeInTheDocument()
    expect(await screen.findByText('test-team-2')).toBeInTheDocument()
    expect(await screen.findByText('1W')).toBeInTheDocument()
    expect(await screen.findByText('2L')).toBeInTheDocument()
    expect(await screen.findByText('39')).toBeInTheDocument()
    expect(await screen.findByText('3')).toBeInTheDocument()
})