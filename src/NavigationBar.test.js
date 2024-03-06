import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from "./NavigationBar";

it('should render correctly', ()=>{

    render(
        <MemoryRouter initialEntries={["/"]}>
            <NavigationBar />
        </MemoryRouter>   
    )
})

it('should match snapshot', ()=>{

    const {asFragment} = render(
        <MemoryRouter initialEntries={["/"]}>
            <NavigationBar />
        </MemoryRouter>   
    )
    expect(asFragment).toMatchSnapshot()
})

it('should render correct text', async()=>{
    render(
        <MemoryRouter initialEntries={["/"]} >
            <NavigationBar />
        </MemoryRouter>   
    )
    expect(await screen.findByText("Sign in with Google")).toBeInTheDocument()
})