const imageProt = {
    width: 600,
    height: 400,
    bitdepth: 24,
    rawsize: 0,
    megapixels: 0,
    computeSize: function() {
        let size = (this.width * this.height) * this.bitdepth / 8 / 1024 / 1024;
        this.rawsize = size;
        this.megapixels = this.width * this.height / 1000 / 1000;
    },


}

imageProt.computeSize();
console.log(imageProt.rawsize);
console.log(imageProt.megapixels);

function Image(width, height, bitdepth) {
    this.width = width;
    this.height = height;
    this.bitdepth = bitdepth;
    this.rawsize = (this.width * this.height) * this.bitdepth / 8 / 1024 / 1024;
    this.megapixels = this.width * this.height / 1000 / 1000;
    this.print = function() {
        for (const prop in this) {
            if (typeof this[prop] === "number") {
                console.log(prop, this[prop])
            }
        }
    }
    this.printMore = function() {
        this.print();
        console.log("ratio", this.width / this.height)
    }
}

function Video(width, height, bitdepth, duration, framerate) {
    //this.width = width;
    //this.height = height;
    //this.bitdepth = bitdepth;
    Image.call(this, width, height, bitdepth);
    this.duration = duration;
    this.framerate = framerate;
    this.totalFrames = function() {    
        console.log(this.duration / this.framerate);
    }

}
const test1 = new Image(6000, 4000, 24);
test1.print();
test1.printMore();
console.log("____________________");

const test2 = new Video(6000, 4000, 24, 50, 300);
test2.print();
test2.printMore();
test2.totalFrames();