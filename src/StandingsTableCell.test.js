import {render, screen} from "@testing-library/react"
import StandingsTableCell from "./StandingsTableCell"

test('renders',()=>{
    render(
        <StandingsTableCell data={1} />
    )
})

test('matches snapshot', ()=>{
    render(
        <StandingsTableCell data={1} />
    )

    expect(screen.asFragment).toMatchSnapshot()
})

test('correct text', async()=>{
    render(
        <StandingsTableCell data={1} />
    )

    expect(await screen.findByText('1')).toBeInTheDocument()
})