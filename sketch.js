let weather;
//http://api.openweathermap.org/data/2.5/weather?q=London&appid=a8ca8f0023037bfb47c4548a07616571
let api = "http://api.openweathermap.org/data/2.5/weather?q=";
//let city ="beijing";
let apiKey = "&appid=a8ca8f0023037bfb47c4548a07616571";
let input;
//p5
let step, i=0, num=26;
let theta= 0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  let button = select("#submit");
  button.mousePressed(weatherAsk);
  input = select('#city');
  //p5
  step=height/num;
}

function weatherAsk(){
  let url = api + input.value() + apiKey;
  loadJSON(url,gotData);
}

function gotData(data){
   console.log(data);
   weather = data;
  }
 
  function draw(){
  //p5
  background(20);
  fill("orange");
  noStroke();
  //rectMode(CENTER);
  circle(width/2,height/2,width*0.6,height*0.6);
  i = 0;
 // dynamic line
    for (let y=2*step; y<height-2*step+1; y += step) {
      let sw = map(sin(theta+(TWO_PI/num*i)), -1, 1, 1.5, 12);
      let edge = 2*step;
      stroke(30);
      strokeWeight(sw);
      line(edge, y, width-edge, y);
      i++;
    }
  //according to the wind speed
    if(weather){
    theta += weather.wind.speed * 0.05;
    }
}
 // if (weather){
    //let density = weather.main.humidity;
  //ellipse(100,100,weather.main.temp,weather.main.temp);
  //ellipse(300,100,weather.main.humidity,weather.main.humidity);
  //}


