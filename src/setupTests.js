// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//MOCK NHL API

jest.mock('./NHL_API',() => ({
    ...jest.requireActual('./NHL_API'),
    getTeamsList: ()=> [{triCode:"TOR"}, {triCode:"MIN"}, {triCode:"STL"}],
    getTeamStats: ()=> ({
        skaters: [
            {
                "playerId": 1,
                "headshot": "",
                "firstName": {
                    "default": "test1"
                },
                "lastName": {
                    "default": "test1"
                },
                "positionCode": "C",
                "gamesPlayed": 38,
                "goals": 1,
                "assists": 6,
                "points": 7,
                "plusMinus": 6,
                "penaltyMinutes": 33,
                "powerPlayGoals": 0,
                "shorthandedGoals": 0,
                "gameWinningGoals": 0,
                "overtimeGoals": 0,
                "shots": 46,
                "shootingPctg": 0.021739,
                "avgTimeOnIcePerGame": 1001.4474,
                "avgShiftsPerGame": 23.5263,
                "faceoffWinPctg": 0
            },
            {
                "playerId": 2,
                "headshot": "",
                "firstName": {
                    "default": "test2"
                },
                "lastName": {
                    "default": "test2"
                },
                "positionCode": "R",
                "gamesPlayed": 34,
                "goals": 3,
                "assists": 1,
                "points": 4,
                "plusMinus": -12,
                "penaltyMinutes": 34,
                "powerPlayGoals": 0,
                "shorthandedGoals": 0,
                "gameWinningGoals": 0,
                "overtimeGoals": 0,
                "shots": 17,
                "shootingPctg": 0.176471,
                "avgTimeOnIcePerGame": 482.1471,
                "avgShiftsPerGame": 11.6471,
                "faceoffWinPctg": 1
            },
            {
                "playerId": 3,
                "headshot": "",
                "firstName": {
                    "default": "test3"
                },
                "lastName": {
                    "default": "test3"
                },
                "positionCode": "D",
                "gamesPlayed": 60,
                "goals": 0,
                "assists": 16,
                "points": 16,
                "plusMinus": 14,
                "penaltyMinutes": 26,
                "powerPlayGoals": 0,
                "shorthandedGoals": 0,
                "gameWinningGoals": 0,
                "overtimeGoals": 0,
                "shots": 36,
                "shootingPctg": 0,
                "avgTimeOnIcePerGame": 1312.5,
                "avgShiftsPerGame": 29.4167,
                "faceoffWinPctg": 0
            }
        ],
        goalies: [
            {
                "playerId": 4,
                "headshot": "",
                "firstName": {
                    "default": "test4"
                },
                "lastName": {
                    "default": "test4"
                },
                "positionCode": "G",
                "gamesPlayed": 38,
                "goals": 1,
                "assists": 6,
                "points": 7,
                "plusMinus": 6,
                "penaltyMinutes": 33,
                "powerPlayGoals": 0,
                "shorthandedGoals": 0,
                "gameWinningGoals": 0,
                "overtimeGoals": 0,
                "shots": 46,
                "shootingPctg": 0.021739,
                "avgTimeOnIcePerGame": 1001.4474,
                "avgShiftsPerGame": 23.5263,
                "faceoffWinPctg": 0
            },
        ]

    }),
    getStandings: ()=> ({
        'Western': {
            'Pacific':[
                {
                    "gamesPlayed": 11,
                    "goalAgainst": 12,
                    "goalFor": 13,
                    "losses": 14,
                    "points": 15,
                    "streakCode": "W",
                    "streakCount": 1,
                    "teamName": {
                        "default": "test-team-1",
                    },
                    "teamAbbrev": {
                        "default": "tt1"
                    },
                    "ties": 16,
                    "wins": 17
                }
            ],
            'Central': [
                {
                    "gamesPlayed": 21,
                    "goalAgainst": 22,
                    "goalFor": 23,
                    "losses": 24,
                    "points": 25,
                    "streakCode": "W",
                    "streakCount": 2,
                    "teamName": {
                        "default": "test-team-2",
                    },
                    "teamAbbrev": {
                        "default": "tt2"
                    },
                    "ties": 26,
                    "wins": 27
                }
            ],
        },
        'Eastern':{
            'Atlantic':[
                {
                    "gamesPlayed": 31,
                    "goalAgainst": 32,
                    "goalFor": 33,
                    "losses": 34,
                    "points": 35,
                    "streakCode": "W",
                    "streakCount": 3,
                    "teamName": {
                        "default": "test-team-3",
                    },
                    "teamAbbrev": {
                        "default": "tt3"
                    },
                    "ties": 36,
                    "wins": 37
                }
            ],
            'Metropolitan':[
                {
                    "gamesPlayed": 41,
                    "goalAgainst": 42,
                    "goalFor": 43,
                    "losses": 44,
                    "points": 45,
                    "streakCode": "W",
                    "streakCount": 4,
                    "teamName": {
                        "default": "test-team-4",
                    },
                    "teamAbbrev": {
                        "default": "tt4"
                    },
                    "ties": 46,
                    "wins": 47
                }
            ]
        }     
    }),
    getSpotlight: ()=>[
        {
            "playerId": 1,
            "name": {
                "default": "test player"
            },
            "playerSlug": "test-player-1",
            "position": "C",
            "sweaterNumber": 87,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "PIT",
            "teamLogo": "",
        },
        {
            "playerId": 2,
            "name": {
                "default": "test player 2"
            },
            "playerSlug": "test-player-2",
            "position": "C",
            "sweaterNumber": 13,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "TOR",
            "teamLogo": "",
        },
        {
            "playerId": 3,
            "name": {
                "default": "test player 3"
            },
            "playerSlug": "test-player-3",
            "position": "C",
            "sweaterNumber": 87,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "PIT",
            "teamLogo": "",
        },
        {
            "playerId": 4,
            "name": {
                "default": "test player 4"
            },
            "playerSlug": "test-player-4",
            "position": "C",
            "sweaterNumber": 34,
            "teamId": 5,
            "headshot": "",
            "teamTriCode": "TOR",
            "teamLogo": "",
        }
    ],
    getCurrentSchedule: ()=>({
        gameWeek: [
            {
                "date": "2024-03-06",
                "dayAbbrev": "WED",
                "numberOfGames": 3,
                "games": [{
                    "id": 2023020990,
                    "season": 20232024,
                    "gameType": 2,
                    "venue": {
                        "default": "Scotiabank Arena"
                    },
                    "neutralSite": false,
                    "startTimeUTC": "2024-03-07T00:00:00Z",
                    "easternUTCOffset": "-05:00",
                    "venueUTCOffset": "-05:00",
                    "venueTimezone": "America/Toronto",
                    "gameState": "FUT",
                    "gameScheduleState": "OK",
                    "awayTeam": {
                        "placeName": {
                            "default": "Buffalo"
                        },
                        "abbrev": "BUF",
                    },
                    "homeTeam": {
                        "placeName": {
                            "default": "Toronto"
                        },
                        "abbrev": "TOR"
                    }
                }
                ]
            }
        ]
    }),
    getGamePredictions: ()=>(
        {
            "2023020990": {
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
        }
    )
}));