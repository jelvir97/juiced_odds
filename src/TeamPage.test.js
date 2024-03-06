import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TeamPage from './TeamPage';
import { MemoryRouter } from 'react-router-dom';
import NHL_API from './NHL_API';

jest.mock('./NHL_API',() => ({
    ...jest.requireActual('./NHL_API'),
    getTeamStats: ()=> ({
        skaters: [
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
        ],
        goalies: [
            {
                "playerId": 4,
                "headshot": "",
                "firstName": {
                    "default": "test4"
                },
                "lastName": {
                    "default": "test4"
                },
                "positionCode": "G",
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
        ]

    })
}));

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useParams : ()=>({team: "TOR"})
}))


test('renders correctly', async()=>{
    await waitFor(()=>{
        render(
            <MemoryRouter initialEntries={['/TOR/stats']}>
                <TeamPage />
            </MemoryRouter>
            )
        })
    
})
    

test('matches snapshot', async ()=>{
    await waitFor(()=>{
        render(
            <MemoryRouter initialEntries={['/TOR/stats']}>
                <TeamPage />
            </MemoryRouter>
            )
        })

    expect(await screen.asFragment).toMatchSnapshot()
})

test('correct text in DOM', async ()=>{
    await waitFor(()=>{
        render(
            <MemoryRouter initialEntries={['/TOR/stats']}>
                <TeamPage />
            </MemoryRouter>
            )
        })
    
        expect( await screen.findByText('TOR')).toBeInTheDocument()
        expect( await screen.findByText('test1 test1'))
        expect( await screen.findByText('test2 test2'))
        expect( await screen.findByText('test3 test3'))
        expect( await screen.findByText('test4 test4'))
})