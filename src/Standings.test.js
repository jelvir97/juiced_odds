import {render, screen, act, waitFor} from "@testing-library/react"
import Standings from "./Standings";
import userEvent from "@testing-library/user-event";


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