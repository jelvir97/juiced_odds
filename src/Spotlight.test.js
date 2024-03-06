import {render, screen, act, waitFor, findByTestId} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Spotlight from "./Spotlight";
import userEvent from "@testing-library/user-event";

jest.mock('./NHL_API',() => ({
    ...jest.requireActual('./NHL_API'),
    getSpotlight: ()=>[
        {
            "playerId": 1,
            "name": {
                "default": "test player"
            },
            "playerSlug": "test-player-1",
            "position": "C",
            "sweaterNumber": 87,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "PIT",
            "teamLogo": "",
        },
        {
            "playerId": 2,
            "name": {
                "default": "test player 2"
            },
            "playerSlug": "test-player-2",
            "position": "C",
            "sweaterNumber": 13,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "TOR",
            "teamLogo": "",
        },
        {
            "playerId": 3,
            "name": {
                "default": "test player 3"
            },
            "playerSlug": "test-player-3",
            "position": "C",
            "sweaterNumber": 87,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "PIT",
            "teamLogo": "",
        },
        {
            "playerId": 4,
            "name": {
                "default": "test player 4"
            },
            "playerSlug": "test-player-4",
            "position": "C",
            "sweaterNumber": 34,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "TOR",
            "teamLogo": "",
        }
    ]
}));

test('renders', async ()=>{
    await waitFor(()=>{
        render(        
        <MemoryRouter>
            <Spotlight />
        </MemoryRouter>
        )

    })
})

test('matches snapshot', async ()=>{
    await waitFor(()=>{
        render(        
            <MemoryRouter>
                <Spotlight />
            </MemoryRouter>
            )
    })

    expect(await screen.asFragment).toMatchSnapshot()
})

test('correct text', async ()=>{
    await waitFor(()=>{
        render(        
            <MemoryRouter>
                <Spotlight />
            </MemoryRouter>
            )
    })

    expect(await screen.findByText('test player')).toBeInTheDocument()
    expect(await screen.findByText('test player 2')).toBeInTheDocument()
})

test('carousel works', async ()=>{
    await waitFor(()=>{
        render(        
            <MemoryRouter>
                <Spotlight />
            </MemoryRouter>
            )
    })
    const nextBtn = await screen.findByTestId('next-arrow')

    expect(await screen.findByText('test player 3')).toBeVisible()
    expect(await screen.findByText('test player 4')).toBeVisible()
})

