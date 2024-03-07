import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

//could not get it to render with User Auth. user State was never set.

jest.mock('./User_API',() => ({
  ...jest.requireActual('./User_API'),
  login : ()=>({
    email: "test@test.com",
    firstName: "testFirst",
    lastName: "testLast",
    googleID : 'testID',
    nhlGames : ["2023020990"]
})
}))

test('renders', async ()=>{
  await act(async()=>{
    render(
        <MemoryRouter>
                <App />
        </MemoryRouter>
        
    )
  })
})

test('matches snapshot', async ()=>{
  await act(async()=>{
    render(
        <MemoryRouter>
                <App />
        </MemoryRouter>
        
    )
  })

  expect(await screen.asFragment).toMatchSnapshot()
})