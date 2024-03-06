import { render, screen,  act } from '@testing-library/react';
import PredictionTable from './PredictionTable';
import userEvent from '@testing-library/user-event';


const testPre = {

        "gameID": "2023020990",
        "homeProbMoney": "0.37",
        "awayProbMoney": "0.672",
        "homeOddsMoney": "170",
        "awayOddsMoney": "-205",
        "homeProbModelMoney": "0.32",
        "awayProbModelMoney": "0.68",
        "homeOddsModelMoney": "213",
        "awayOddsModelMoney": "-213",
        "expectedRoiHomeMoney": "-0.136",
        "expectedRoiAwayMoney": "0.012"
}


test('renders correctly', ()=>{
   
        render(
            <PredictionTable predictions={testPre} />
        )

})

test('matches snapshot', ()=>{
    render(
        <PredictionTable predictions={testPre} />
    )

    expect(screen.asFragment).toMatchSnapshot()
})


test('correct text: predictions', async()=>{
    const user = userEvent.setup()
    render(
        <PredictionTable predictions={testPre} />
    )

    const predictionsBtn = await screen.findByText('Predictions')
    await act(async()=>{
        await user.click(predictionsBtn)
    })

    expect(await screen.findByText('Money Line %')).toBeInTheDocument()
    expect(await screen.findByText('Model ML Odds')).toBeInTheDocument()
    expect(await screen.findByText('-0.136')).toBeInTheDocument()
    expect(await screen.findByText('-205')).toBeInTheDocument()
})