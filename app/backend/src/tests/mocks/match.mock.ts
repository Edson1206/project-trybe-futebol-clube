import * as Jwt from 'jsonwebtoken';
export const UsersMock =  [
  {
    username: 'Casemiro',
    role: 'Admin',
    email: 'meteuessa@admin.com',
    password: 'meteu_essa'
  },
  {
    username: 'Luva',
    role: 'User',
    email: 'receba@user.com',
    password: 'receba', 
  },
]
export const token = Jwt.sign({ userId: 1 }, 'jwt_secret', {
  expiresIn: '7d',
});

export const TeamsMock = [
  [
    {
      "teamName": "Avaí/Kindermann"
    },
    {
      "teamName": "Bahia"
    },
    {
      "teamName": "Botafogo"
    },
    {
      "teamName": "Corinthians"
    },
    {
      "teamName": "Cruzeiro"
    },
    {
      "teamName": "Ferroviária"
    },
    {
      "teamName": "Flamengo"
    },
    {
      "teamName": "Grêmio"
    },
    {
      "teamName": "Internacional"
    },
    {
      "teamName": "Minas Brasília"
    },
    {
      "teamName": "Napoli-SC"
    },
    {
      "teamName": "Palmeiras"
    },
    {
      "teamName": "Real Brasília"
    },
    {
      "teamName": "Santos"
    },
    {
      "teamName": "São José-SP"
    },
    {
      "teamName": "São Paulo"
    }
  ],
]

export const MatchesMock =[
  {
    home_team: 16,
    home_team_goals: 1,
    away_team: 8,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 9,
    home_team_goals: 1,
    away_team: 14,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 4,
    home_team_goals: 3,
    away_team: 11,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 3,
    home_team_goals: 0,
    away_team: 2,
    away_team_goals: 0,
    in_progress: true,
  },
  {
    home_team: 7,
    home_team_goals: 1,
    away_team: 10,
    away_team_goals: 1,
    in_progress: false,
  },
]

export const resultMatches = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": 0,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": 0,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": 0,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  },
]