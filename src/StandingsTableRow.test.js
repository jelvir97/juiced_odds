import {render, screen} from "@testing-library/react"
import StandingsTableRow from "./StandingsTableRow"

const testTeam = {
    "gamesPlayed": 63,
    "goalAgainst": 176,
    "goalFor": 224,
    "losses": 17,
    "points": 85,
    "streakCode": "W",
    "streakCount": 1,
    "teamName": {
        "default": "Vancouver Canucks",
    },
    "teamAbbrev": {
        "default": "VAN"
    },
    "ties": 0,
    "wins": 39
}

test('renders',()=>{
    render(
        <StandingsTableRow team={testTeam} />
    )
})

test('matches snapshot', ()=>{
    render(
        <StandingsTableRow team={testTeam} />
    )

    expect(screen.asFragment).toMatchSnapshot()
})

test('correct text', async()=>{
    render(
        <StandingsTableRow team={testTeam} />
    )

    expect(await screen.findByText('Vancouver Canucks')).toBeInTheDocument()
    expect(await screen.findByText('1W')).toBeInTheDocument()
    expect(await screen.findByText('63')).toBeInTheDocument()
    expect(await screen.findByText('39')).toBeInTheDocument()
    expect(await screen.findByText('176')).toBeInTheDocument()
})