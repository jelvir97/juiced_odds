import { render, screen, waitFor, act } from '@testing-library/react';
import PlayerCarousel from './PlayerCarousel';
import { MemoryRouter } from 'react-router-dom';

const testPlayers = [
    {
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
    },
    {
        "playerId": 2,
        "headshot": "",
        "firstName": {
            "default": "test2"
        },
        "lastName": {
            "default": "test2"
        },
        "positionCode": "R",
        "gamesPlayed": 34,
        "goals": 3,
        "assists": 1,
        "points": 4,
        "plusMinus": -12,
        "penaltyMinutes": 34,
        "powerPlayGoals": 0,
        "shorthandedGoals": 0,
        "gameWinningGoals": 0,
        "overtimeGoals": 0,
        "shots": 17,
        "shootingPctg": 0.176471,
        "avgTimeOnIcePerGame": 482.1471,
        "avgShiftsPerGame": 11.6471,
        "faceoffWinPctg": 1
    },
    {
        "playerId": 3,
        "headshot": "",
        "firstName": {
            "default": "test3"
        },
        "lastName": {
            "default": "test3"
        },
        "positionCode": "D",
        "gamesPlayed": 60,
        "goals": 0,
        "assists": 16,
        "points": 16,
        "plusMinus": 14,
        "penaltyMinutes": 26,
        "powerPlayGoals": 0,
        "shorthandedGoals": 0,
        "gameWinningGoals": 0,
        "overtimeGoals": 0,
        "shots": 36,
        "shootingPctg": 0,
        "avgTimeOnIcePerGame": 1312.5,
        "avgShiftsPerGame": 29.4167,
        "faceoffWinPctg": 0
    }
]

test('renders correctly', async()=>{
    await waitFor(()=>{render(
        <MemoryRouter>
            <PlayerCarousel players={testPlayers} />
        </MemoryRouter>
        )
    })
})

test('matches snapshot', async ()=>{
    await waitFor(()=>{render(
        <MemoryRouter>
            <PlayerCarousel players={testPlayers} />
        </MemoryRouter>
        )
    })
    expect(await screen.asFragment).toMatchSnapshot()
})

test('correct text', async ()=>{
    await waitFor(()=>{render(
        <MemoryRouter>
            <PlayerCarousel players={testPlayers} />
        </MemoryRouter>
        )
    })
        expect(screen.getByText('test1 test1')).toBeInTheDocument()
        expect(screen.getByText('test2 test2')).toBeInTheDocument()
        expect(screen.getByText('test3 test3')).toBeInTheDocument()
})
