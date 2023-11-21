const axios = require('axios');
async function getRoster(teamAbv){
    let toReturn = "";
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
        params: {teamAbv: teamAbv},
        headers: {
            'X-RapidAPI-Key': '9644ba66f6msh91f9bbb1863cc23p109ea5jsn2b480abdcd7d',
            'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        },

    };

    try {
        const response = await axios.request(options);
        const responseData = response.data.body.roster[5];
        console.log(responseData)

    } catch (error) {
        console.error(error);
    }
    return toReturn;

}

getRoster('CLE')