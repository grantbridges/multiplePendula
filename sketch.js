let g;  // gravity
let pl; // pendulum list
let b;  // bool to pause/unpause with clicks on the canvas

let pendulaCanvas = function(p) {
    let xo;
    let yo;
    p.setup = function() {
        // Set up canvas
        p.createCanvas(window.innerWidth - 20,window.innerHeight - 40);
        xo = p.width/2;
        yo = p.height/2;
        
        // Set gravity
        g = 1;
        
        // Set initial angles, lengths and masses (angles.length determines the number of pendula)
        let angles = [-math.pi*2/7,-math.pi*5/11,math.pi*1.1,-math.pi*1/4];
        let lengths = [100,100,100,50];
        let masses = [4,5,3,4];
        
        // Create objects and start
        pl = new Pendula(angles,lengths,masses,p);
        pl.traceList = [1,3];
        b = true;
        p.translate(xo,yo);
        p.background(50);
        pl.draw(p);
    }
    p.draw = function() {
        if (b) { // Check if paused updates
            p.translate(xo,yo);
            pl.update();
            p.background(50);
            pl.draw(p);
        }
    }
    // Pause/unpause when clicking on canvas
    p.mouseClicked = function() {
        b = !b;
    }
    p.windowResized = function() {
        this.resizeCanvas(window.innerWidth - 20,window.innerHeight - 40);
        xo = p.width/2;
        yo = p.height/2;
    }
}
let displayCanvas = new p5(pendulaCanvas,'pendulaCanvas')