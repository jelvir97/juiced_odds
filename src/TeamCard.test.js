import { render, screen } from '@testing-library/react';
import TeamCard from './TeamCard';
import { MemoryRouter } from 'react-router-dom';

test('renders correctly', ()=>{
   render(
        <MemoryRouter>
            <TeamCard abbrev="TOR" />
        </MemoryRouter>
        )
    })

test('matches snapshot', ()=>{
    const {asFragment} = render(
        <MemoryRouter>
            <TeamCard abbrev="TOR" />
        </MemoryRouter>
        )

    expect(asFragment).toMatchSnapshot()
})

test('team abbrev found on page', ()=>{
    render(
        <MemoryRouter>
            <TeamCard abbrev="TOR" />
        </MemoryRouter>
        )
    
        expect(screen.getByText('TOR')).toBeInTheDocument()
})
