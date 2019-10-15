const fs = require('fs');
const game = require('./game')
const express = require('express');

// 玩家胜利次数，如果超过3，则后续往该服务器的请求都返回500
var playerWinCount = 0
// 玩家的上一次游戏动作
var lastPlayerAction = null;
// 玩家连续出同一个动作的次数
var sameCount = 0;

const app = express();

app.get('/favicon.ico', function (request, response) {
    response.status(200)
    return;
})

app.get('/game',

    function (request, response, next) {
        if (playerWinCount >= 3 || sameCount == 9) {
            response.status(500);
            response.send('我不会再玩了！');
            return;
        }

        next();

        if (response.playerWon) {
            playerWinCount++;
        }
    },

    function (request, response, next) {
        const query = request.query;
        const playerAction = query.action;
        if (!playerAction) {
            response.status(400);
            response.send();
            return;
        }

        if (lastPlayerAction == playerAction) {
            sameCount++
            if (sameCount >= 3) {
                response.status(400);
                response.send('你作弊！我再也不玩了');
                sameCount = 9
                return;
            }

        } else {
            sameCount = 0;
        }
        lastPlayerAction = playerAction;
        response.playerAction = playerAction
        next();
    },
    
    function (req, response) {
        const playerAction = response.playerAction;
        const result = game(playerAction);
        
        setTimeout(()=> {
            response.status(200);
            if (result == 0) {
                response.send('平局')
    
            } else if (result == -1) {
                response.send('你输了')
    
            } else {
                response.send('你赢了')
                response.playerWon = true;
    
            }
        }, 500)
    }
)

app.get('/', function (request, response) {
    response.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})

app.listen(3000);