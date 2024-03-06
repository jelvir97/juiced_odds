import {render, screen} from "@testing-library/react"
import PlayerStatsTableRow from "./PlayerStatsTableRow"



test('renders', ()=>{
    render(
        <PlayerStatsTableRow header="Goals" data="2" />
    )
})

test('matches snapshot', ()=>{
    render(
        <PlayerStatsTableRow header="Goals" data="2" />
    )

    expect( screen.asFragment).toMatchSnapshot()
})

test('has correct text', async ()=>{
    render(
        <PlayerStatsTableRow header="Goals" data="2" />
    )

    expect(await screen.findByText('Goals')).toBeInTheDocument()
    expect(await screen.findByText('2')).toBeInTheDocument()
})