const fetch = require('cross-fetch');	

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
 
summoner = {}

summoner.getSummoner = async (req, res) => {
    const { summoner } = req.params;
    let summonerData = {};
    let id = '';
    await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(data => {
        id = data.id;
        puuid = data.puuid;
        summonerData = data;
    })
    await fetch(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(data => {
        let league = data;
        summonerData = {
            ...summonerData,
            league
        };
    })
    await fetch(`https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then(data => {
            let mastery = data;
            summonerData ={
                ...summonerData,
                mastery
        };
    })    
 
    return res.json(summonerData)
}

summoner.getMatches = async (req, res) => {
    const { puuid } = req.params;
    let matches = {};
    await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.API_KEY}`)
            .then(response => response.json())
            .then(data => {
                matches = data;
    })
    return res.json(matches)
}

summoner.getWhoWIn = async (req, res) => {
    const { matchId } = req.params;
    result = {};
    await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then(data => {
            result = data;
        })
    return res.json(result)
}

module.exports = summoner;