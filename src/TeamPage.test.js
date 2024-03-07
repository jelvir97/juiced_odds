import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TeamPage from './TeamPage';
import { MemoryRouter } from 'react-router-dom';
import NHL_API from './NHL_API';


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