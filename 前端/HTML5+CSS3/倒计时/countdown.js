var WINDOW_WIDTH = 0;
var WINDOW_HEIGHT = 0;
var RADIUS = 5;
var MARGIN_TOP = 50;
var MARGIN_LEFT = 350;

var endTime = new Date();
endTime.setTime(endTime.getTime()+3600*1000);

var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#F02C2C","#29F125","#5425CC","#10DD9D","#F0D629","#E919B9","#E0EA5E","#EC21AC","#F2B93D","#1B4686"];

window.onload = function(){
    WINDOW_WIDTH = document.documentElement.clientWidth - 19;
    WINDOW_HEIGHT = document.documentElement.clientHeight -19;

    MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
    RADIUS = Math.round((WINDOW_WIDTH*4/5/108))-1;

    MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();
    render(context);
    setInterval(function(){
       //curShowTimeSeconds = getCurrentShowTimeSeconds();
        update();
        render(context);
    },30);
}

function update(){
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours = parseInt(nextShowTimeSeconds/3600);
    var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600)/60 );
    var nextSeconds = parseInt(nextShowTimeSeconds % 60);

    var curHours = parseInt(curShowTimeSeconds / 3600);
    var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
    var curSeconds = parseInt(curShowTimeSeconds % 60);

    if(nextSeconds != curSeconds){
        if(parseInt(curHours/10) != parseInt(nextHours/10)){
            addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(curHours/10));
        }
        if(parseInt(curHours%10) != parseInt(nextHours%10)){
            addBalls(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
        }

        if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
            addBalls(MARGIN_LEFT + 39 * (RADIUS+1),MARGIN_TOP,parseInt(curHours/10));
        }
        if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
            addBalls(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
        }

        if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
            addBalls(MARGIN_LEFT + 78*(RADIUS+1),MARGIN_TOP,parseInt(curHours/10));
        }
        if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
            addBalls(MARGIN_LEFT + 93*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
        }
        curShowTimeSeconds = nextShowTimeSeconds;
    }

    updateBalls();
}

function updateBalls(){
    for(var i=0;i<balls.length;i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
       
        if(balls[i].y > WINDOW_HEIGHT - RADIUS){
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            balls[i].vy = -balls[i].vy * 0.75;
        }
     }

     var cnt = 0;
     for(var i=0;i<balls.length;i++){
        if(balls[i].x  > 0 && balls[i].x  < WINDOW_WIDTH){
            balls[cnt++] = balls[i];
        }
     }
     while(balls.length >cnt) balls.pop();
}

function addBalls(x,y,num){
    for(var i =0;i<digit[num].length;i++)
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                var aBall = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000)) * 4,
                    vy:-5,
                    color:colors[Math.floor(Math.random()*colors.length)]
                }
                balls.push(aBall);
            }
        }
}

function getCurrentShowTimeSeconds(){
    var curTimer = new Date();
    var ret = endTime.getTime() - curTimer.getTime();
    ret = Math.round(ret/1000);

    return ret >=0? ret : 0;
}

function render(cxt){

    //刷新
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

    var hours = parseInt(curShowTimeSeconds/3600);
    var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
    var seconds = curShowTimeSeconds%60;

    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
    renderDigit(MARGIN_LEFT + 30*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT + 39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
    renderDigit(MARGIN_LEFT + 69*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT + 78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
    renderDigit(MARGIN_LEFT + 93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);

    for(var i=0;i<balls.length;i++){
        cxt.fillStyle = balls[i].color;

        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
        cxt.closePath();

        cxt.fill();
    }
}

function renderDigit(x,y,num,cxt){
    cxt.fillStyle = "rgb(0,102,153)";

    for(var i = 0;i<digit[num].length;i++)
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
}