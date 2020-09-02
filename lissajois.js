
function sx(a,f,t,phase,off) {
  return a*Math.cos( f*2*Math.PI*t + phase )+off;
}

function sy(a,f,t,off) {
  return a*Math.sin( f*2*Math.PI*t )+off;
}

function liss(ifx,ify,iphase) {
  let n = 600;
  let fx = ifx;
  let fy = ify;
  for(let k=0;k<n;k++) {
    let t0 = k/n;
    let t1 = (k+1)/n;
    let a = 160;
    let off = 200;
    let phase = iphase;
    let p0x = sx(a,fx,t0,phase,off);
    let p0y = sy(a,fy,t0,off);
    let p1x = sx(a,fx,t1,phase,off);
    let p1y = sy(a,fy,t1,off);
    let c0r = 255 * ((t+1) % 2 + 1)/3;
    let c0g = 0;
    let c0b = 0;//255 * ((t+0.5) % 2 + 1)/3;
    let c1r = 0;
    let c1b = 255 * (t % 2 + 1)/3;
    let c1g = 0;
    stroke(t0*c0r+(1-t0)*c1r,t0*c0g+(1-t0)*c1g,t0*c0b+(1-t0)*c1b);
    line(p0x,p0y,p1x,p1y);
  }
    
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  
  liss(5,4,3*Math.PI/32);
  
}


function draw() {
  
  
  
}
