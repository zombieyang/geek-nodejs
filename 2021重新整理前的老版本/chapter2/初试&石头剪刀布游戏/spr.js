var playerAction = process.argv[2];
console.log(playerAction)
if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'scissor') {
    console.log('请输入rock或paper或scissor')

} else {
    // 计算电脑出的东西
    var computerAction;
    var random = Math.random() * 3
    if (random < 1) {
        computerAction = 'rock'
        console.log('电脑出了石头')

    } else if (random > 2) {
        computerAction = 'scissor'
        console.log('电脑出了剪刀')

    } else {
        computerAction = 'paper'
        console.log('电脑出了布')
        
    }

    if (computerAction == playerAction) {
        console.log('平局')

    } else if (
        (computerAction == 'rock' && playerAction == 'scissor') ||
        (computerAction == 'scissor' && playerAction == 'paper') ||
        (computerAction == 'paper' && playerAction == 'rock')
    ) {
        console.log('你输了')

    } else {
        console.log('你赢了')
    }
}