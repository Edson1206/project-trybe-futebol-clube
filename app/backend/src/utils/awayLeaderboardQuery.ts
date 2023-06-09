const awayLeaderboardQuery = `SELECT
t.team_name as 'name',
SUM(CASE
WHEN m.away_team_goals > m.home_team_goals THEN 3
WHEN m.away_team_goals < m.home_team_goals THEN 0
ELSE 1 END) as 'totalPoints',
COUNT(t.id) as 'totalGames',
SUM(CASE
WHEN m.away_team_goals > m.home_team_goals THEN 1
ELSE 0 END) as 'totalVictories',
SUM(CASE
WHEN m.away_team_goals = m.home_team_goals THEN 1
ELSE 0 END) as 'totalDraws',
SUM(CASE
WHEN m.away_team_goals < m.home_team_goals THEN 1
ELSE 0 END) as 'totalLosses',
SUM(m.away_team_goals) as 'goalsFavor',
SUM(m.home_team_goals) as 'goalsOwn',
SUM(m.away_team_goals) - SUM(m.home_team_goals) as 'goalsBalance',
FORMAT((SUM(CASE
WHEN m.away_team_goals > m.home_team_goals THEN 3
WHEN m.away_team_goals < m.home_team_goals THEN 0
ELSE 1 END) / (COUNT(t.id) * 3)) * 100, 2) as 'efficiency'
FROM TRYBE_FUTEBOL_CLUBE.matches as m
JOIN TRYBE_FUTEBOL_CLUBE.teams as t
ON m.away_team_id = t.id
WHERE m.in_progress = 0
GROUP BY t.id
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn ASC`;

export default awayLeaderboardQuery;
