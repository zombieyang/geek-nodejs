const list = [
    "Objectivezt",
    "田大头",
    "Geek_d4bf9b",
    "筑梦师刘渊",
    "数字Gannon",
    "🌊",
    "朋克是夏天的冰镇雪碧",
    "許敲敲",
    "tuyu",
    "Middleware",
    "menghai",
    "小北",
    "Sky-fly",
    "渭河",
    "micstone",
    "Mr-L.x.D..☻",
    "阿秀",
    "葛维维",
    "许童童",
    "1024",
    "Serendipity",
    "莫奈",
    "九",
    "Glee",
    "如也",
    "忘了i.",
    "刘彪"
]

console.log('恭喜以下几位同学');
for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * list.length);

    console.log(list[random]);

    list[random] = list[list.length - 1];
    list.length--;
}