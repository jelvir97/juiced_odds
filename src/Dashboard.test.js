import { render, screen, waitFor, act} from "@testing-library/react"
import Dashboard from "./Dashboard"
import UserContext from "./UserContext"
import { MemoryRouter } from "react-router-dom"

const testTracked = ['2023020990']
const testUC = {
    user: {
        email: "test@test.com",
        firstName: "testFirst",
        lastName: "testLast",
        googleID : 'testID',
        nhlGames : ["2023020990"]
    }
}

test('renders', async()=>{
    
    await act(async()=>{
        render(
            <MemoryRouter>
                <UserContext.Provider value={testUC}>
                    <Dashboard />
                </UserContext.Provider>
            </MemoryRouter>
            
        )
    })     
})

test('matches snapshot', async()=>{
    
    await act(async()=>{
        render(
            <MemoryRouter>
                <UserContext.Provider value={testUC}>
                    <Dashboard />
                </UserContext.Provider>
            </MemoryRouter>
            
        )
    })
    
    await waitFor(()=> expect(screen.asFragment).toMatchSnapshot())
})

test('correct text', async()=>{
    await act(async()=>{
        render(
            <MemoryRouter>
                <UserContext.Provider value={testUC}>
                    <Dashboard />
                </UserContext.Provider>
            </MemoryRouter>
            
        )
    })  

    expect( await screen.findByText('WED 03-06')).toBeInTheDocument()
    expect( await screen.findByText('test player')).toBeInTheDocument()
})