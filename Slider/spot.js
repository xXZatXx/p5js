class spot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        fill(220, 220, 0);
        stroke(210, 180, 0);
        circle(this.x, this.y, 50)
    }
}