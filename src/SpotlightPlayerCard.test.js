import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SpotlightPlayerCard from "./SpotlightPlayerCard"

const testPlayer = {
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
    "sortId": 2
}

test('renders', ()=>{
    render(
        <MemoryRouter>
            <SpotlightPlayerCard player={testPlayer} />
        </MemoryRouter>    
    )
})

test('matches snapshot', ()=>{
    render(
        <MemoryRouter>
            <SpotlightPlayerCard player={testPlayer} />
        </MemoryRouter>
    )

    expect( screen.asFragment).toMatchSnapshot()
})

test('correct text', async ()=>{
    render(
        <MemoryRouter>
            <SpotlightPlayerCard player={testPlayer} />
        </MemoryRouter>
    )

    expect(await screen.findByText('test player'))
    expect(await screen.findByText('C'))
    expect(await screen.findByText('#87'))
})