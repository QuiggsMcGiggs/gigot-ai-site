const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse={x:null,y:null};

window.addEventListener("mousemove",function(e){
mouse.x=e.x;
mouse.y=e.y;
});

let particles=[];

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-.5)*1.5,
vy:(Math.random()-.5)*1.5
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();

particles.forEach(p2=>{

let dx=p.x-p2.x;
let dy=p.y-p2.y;
let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<140){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);

ctx.strokeStyle="rgba(56,189,248,"+(1-dist/140)+")";
ctx.stroke();

}

});

});

requestAnimationFrame(draw);

}

draw();

window.addEventListener("resize",function(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});