const Router = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send({
        title: 'API REST',
        version: '1.0.10',
        author: 'Carlos Pasten Bravo',
        message : '',
        endPoints : [
            {
                url: '/summoner/:summoner',
                method: 'GET',
                description: 'Get summoner data'
            },
            {
                url: '/matches/:puuid',
                method: 'GET',
                description: 'Get summoner matches'
            },
            {
                url: '/whoWon/:matchId',
                method: 'GET',
                description: 'Get who won a match'
            }
        ]
    });
});

module.exports = router;