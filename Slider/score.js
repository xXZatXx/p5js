class score {
    constructor(x, y, text, color, size, alphaSpeed){
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.size = size;
        this.alpha = 255;
        this.alphaSpeed = alphaSpeed;
    }
  
    show(){
        noStroke();
        textSize(this.size);
        fill(this.color[0], this.color[1], this.color[2], this.alpha);
        text(str(this.text), this.x, this.y);
    }
  
    update(){
        this.y -= 2;
        this.alpha -= this.alphaSpeed;
    }
  
    dead(){
        return this.alpha <= 0
    }
  }