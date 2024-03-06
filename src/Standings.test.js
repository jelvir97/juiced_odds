import {render, screen, act, waitFor} from "@testing-library/react"
import Standings from "./Standings";
import userEvent from "@testing-library/user-event";

jest.mock('./NHL_API',() => ({
    ...jest.requireActual('./NHL_API'),
    getStandings: ()=> ({
        'Western': {
            'Pacific':[
                {
                    "gamesPlayed": 11,
                    "goalAgainst": 12,
                    "goalFor": 13,
                    "losses": 14,
                    "points": 15,
                    "streakCode": "W",
                    "streakCount": 1,
                    "teamName": {
                        "default": "test-team-1",
                    },
                    "teamAbbrev": {
                        "default": "tt1"
                    },
                    "ties": 16,
                    "wins": 17
                }
            ],
            'Central': [
                {
                    "gamesPlayed": 21,
                    "goalAgainst": 22,
                    "goalFor": 23,
                    "losses": 24,
                    "points": 25,
                    "streakCode": "W",
                    "streakCount": 2,
                    "teamName": {
                        "default": "test-team-2",
                    },
                    "teamAbbrev": {
                        "default": "tt2"
                    },
                    "ties": 26,
                    "wins": 27
                }
            ],
        },
        'Eastern':{
            'Atlantic':[
                {
                    "gamesPlayed": 31,
                    "goalAgainst": 32,
                    "goalFor": 33,
                    "losses": 34,
                    "points": 35,
                    "streakCode": "W",
                    "streakCount": 3,
                    "teamName": {
                        "default": "test-team-3",
                    },
                    "teamAbbrev": {
                        "default": "tt3"
                    },
                    "ties": 36,
                    "wins": 37
                }
            ],
            'Metropolitan':[
                {
                    "gamesPlayed": 41,
                    "goalAgainst": 42,
                    "goalFor": 43,
                    "losses": 44,
                    "points": 45,
                    "streakCode": "W",
                    "streakCount": 4,
                    "teamName": {
                        "default": "test-team-4",
                    },
                    "teamAbbrev": {
                        "default": "tt4"
                    },
                    "ties": 46,
                    "wins": 47
                }
            ]
        }     
    })
}));

test('renders', async()=>{
    await waitFor(()=>{
        render(
            <Standings />
        )
    })
})

test('matches snapshot', async()=>{
    await waitFor(()=>{
        render(
            <Standings />
        )
    })

    expect(screen.asFragment).toMatchSnapshot()
})

test('correct text', async()=>{
    await waitFor(()=>{
        render(
            <Standings />
        )
    })

    expect(await screen.findByText('test-team-4')).toBeInTheDocument()
})

test('tabs work', async()=>{
    const user = userEvent.setup()
    await waitFor(()=>{
        render(
            <Standings />
        )
    })

    expect(await screen.findByText('test-team-4')).toBeInTheDocument()

    await act(async()=>{
        await user.click(await screen.findByText('E - Atlantic'))
    })

    expect(await screen.findByText('test-team-3')).toBeInTheDocument()
    
})