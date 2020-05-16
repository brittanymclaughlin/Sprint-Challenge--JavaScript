// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
}
CuboidMaker.prototype.volume = function(){
    const vol = this.length * this.width * this.height;
    return vol;
}
CuboidMaker.prototype.surfaceArea = function (){
    const surfaceArea1 = (2 * ((this.width * this.length) + (this.length * this.height) + (this.width * this.height)));
    return surfaceArea1;
}
const cuboid = new CuboidMaker(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(length,width,height){
        super(length,width,height);
    }
    cubeVolume(){
        return (this.width * this.width * this.width);
    }
    cubeSA(){
        return (6 * (this.width * this.length));
    }
}
const cubie = new CubeMaker(4,4,4);

console.log(cubie.cubeVolume());
console.log(cubie.cubeSA());

