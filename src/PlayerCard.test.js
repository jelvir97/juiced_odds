import { render, screen, waitFor, act } from '@testing-library/react';
import PlayerCard from './PlayerCard';
import { MemoryRouter } from 'react-router-dom';


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


test('renders correctly', async()=>{
    await waitFor(()=>{render(
        <MemoryRouter>
            <PlayerCard player={testPlayer} />
        </MemoryRouter>
        )
    })
})

test('matches snapshot', async ()=>{
    await waitFor(()=>{render(
        <MemoryRouter>
            <PlayerCard player={testPlayer} />
        </MemoryRouter>
        )
    })
    expect(await screen.asFragment).toMatchSnapshot()
})

test('correct text', async ()=>{
    await waitFor(()=>{render(
        <MemoryRouter>
            <PlayerCard player={testPlayer} />
        </MemoryRouter>
        )
    })
        expect(screen.getByText('test1 test1')).toBeInTheDocument()
})
