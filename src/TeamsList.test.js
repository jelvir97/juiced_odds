import { render, screen, waitFor } from '@testing-library/react';
import TeamsList from './TeamsList';
import { MemoryRouter } from 'react-router-dom';
import NHL_API from './NHL_API';

jest.mock('./NHL_API',() => ({
    ...jest.requireActual('./NHL_API'),
    getTeamsList: ()=> [{triCode:"TOR"}, {triCode:"MIN"}, {triCode:"STL"}]
}));




test('renders correctly', async ()=>{
    await waitFor(()=>{
        render(<MemoryRouter>
            <TeamsList />
        </MemoryRouter>
    )
    })
    })

test('matches snapshot', async ()=>{
    await waitFor(()=>{
        render(<MemoryRouter>
            <TeamsList />
        </MemoryRouter>
    )
    })

    expect(await screen.asFragment).toMatchSnapshot()
})

test('team abbrev found on page', async ()=>{
    
        await waitFor(()=>{
            render(<MemoryRouter>
                <TeamsList />
            </MemoryRouter>
        )
        })
        expect(await screen.findByText('TOR')).toBeInTheDocument()
        expect(await screen.findByText('MIN')).toBeInTheDocument()
        expect(await screen.findByText('STL')).toBeInTheDocument()
})