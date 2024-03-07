import {render, screen, act, waitFor, findByTestId} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Spotlight from "./Spotlight";
import userEvent from "@testing-library/user-event";


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

