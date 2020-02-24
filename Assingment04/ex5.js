class Image {
    constructor(width,height,bitdepth) {
        this.width = width;
        this.height = height;
        this.bitdepth = bitdepth;
        this.rawsize = (this.width * this.height) * this.bitdepth / 8 / 1024 / 1024;
        this.megapixels = this.width * this.height /1000 /1000;
    }
    print() {
        for (const prop in this) {
            if (typeof this[prop] === "number") {
                console.log(prop, this[prop])
            }
        }
    }
    printMore() {
        for (const prop in this) {
            if (typeof this[prop] === "number") {
                console.log(prop, this[prop])
            }
        }
        console.log("ratio",this.width/this.height)
    }
}

let testImg = new Image(6000,4000,24)
testImg.print()
testImg.printMore()