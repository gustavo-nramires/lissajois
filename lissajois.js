
function fx(a,t,off) {
  return a*Math.cos( 6*Math.PI*t + 0*Math.PI/8 )+off;
}

function fy(a,t,off) {
  return a*Math.sin( 2*Math.PI*t )+off;
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  //line(0,0,50,50);
  
  let n = 200;
  for(let k=0;k<n;k++) {
    let t0 = k/n;
    let t1 = (k+1)/n;
    let a = 160;
    let off = 200;
    let p0x = fx(a,t0,off);
    let p0y = fy(a,t0,off);
    let p1x = fx(a,t1,off);
    let p1y = fy(a,t1,off);
    let c0r = 240;
    let c0g = 0;
    let c0b = 100;
    let c1r = 0;
    let c1g = 255;
    let c1b = 0;
    stroke(t0*c0r+(1-t0)*c1r,t0*c0g+(1-t0)*c1g,t0*c0b+(1-t0)*c1b);
    line(p0x,p0y,p1x,p1y);
  }
  
}


function draw() {
  
  
  
}
