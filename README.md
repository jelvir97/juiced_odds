# Juiced Odds

Deployed *[here](https://juiced-odds.onrender.com/)*.

Juiced Odds is a web app designed to display and compare odds from a Machine Learning Model, that predicts the outcomes of NHL games, and publisher odds. It is modeled after sports statistics websites like NHL.com. Its intended purpose is to compare model outputs and publisher odds. If there is a large discrepancy between the two then there is likely an opportunity to win more on your investment.

## Features

- Sign-in/Sign-up with Google
    - Make authentication easier for user.
- Dashboard with weekly schedule and player spotlight
    - Easy access to relevant information for the user
- Ability to track/untrack games (Further Implementation Planned)
    - Easy access to games that most interest the user.
- Standings table for all 4 divisions
    - Allows comparison of team stats.
- List of Teams
- Team Player stats

### Future Features

- Twilio text updates on major odds/model changes and tracked games.
- Game Page: to better display what the match up will be like.
- Visualization of team stats over time.
- Visualization of player stats on rink.

## Tech Stack

- React (w/ Create React App)
- React Router
- Tailwind CSS
- Headless UI
- Material UI
- Axios

## User Flows

First load brings user to Home page. It prompts the user to sign in with google and then redirects to the google authentication page. It redirects back to the home page, but now the nav bar will have links for teams, standings and dashboard. Dashboard will display the week's schedule and players in the spotlight. Clicking on a player will bring the user to the player's team page. The team page will display the current roster of players sorted into their respective positions. The Standings link displays current standings for the user. The displayed division can be toggled with the tabs at the top. The teams link just displays a list of team abbreviations and their logos.

## API

- Server: https://github.com/jelvir97/capstone-2-nhl
    - For more information and how to run. Visit the github.
- NHL API : https://github.com/Zmalski/NHL-API-Reference?tab=MIT-1-ov-file


## Available Scripts

In the project directory, you can run:

### `npm start`

To run you will need to fork and clone the server from github. Link above.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



### `npm test`

Launches the test runner in the interactive watch mode.\
Will run all tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
