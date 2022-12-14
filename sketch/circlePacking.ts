// //interface CircleData {
//    // position: Position;
//    // radius: number;
// //}
// //interface Position {
//    // x: number;
//    // y: number;
// //}

// /**
//  * Creates and returns an array of Circle objects which, when visualised, do not overlap each other.
//  * @param areaWidth the width of the area within which circles may be generated
//  * @param areaHeight the height of the area within which circles may be generated
//  * @return an array of generated Circle data objects
//  */
// function calculatePackedCircles(
//     areaWidth: number,
//     areaHeight: number
// ): CircleData[] {
//     //TODO: you need to implement this function properly!
//     //These are just a couple of random circles, with no consideration yet for avoiding overlap.
//     const circleDataOne: CircleData = {
//         position: { x: 300, y: 300 },
//         radius: 100,
//     };
//     const circleDataTwo: CircleData = {
//         position: { x: random(0, areaWidth), y: random(0, areaHeight) },
//         radius: 40,
//     };
//     return [circleDataOne, circleDataTwo];
// }

// /** Returns the distance between two given positions.
//     This function doesn't require the p5.js library.
//  */
// function distance(p1: Position, p2: Position): number {
//     const x = p1.x - p2.x;
//     const y = p1.y - p2.y;
//     const hyp = Math.sqrt(x * x + y * y);
//     return hyp;
// }
/* function calculatePackedCircles(): CircleData[]

	VALIDATED_CIRCLES = empty array of CircleData objects
	
	repeat 1000 times
	
			CANDIDATE = generate a CircleData object with a random position and radius
	
			if CANDIDATE does not overlap* with any element of VALIDATED_CIRCLES
	
			    add CANDIDATE to VALIDATED_CIRCLES
	
			else
	
			    do nothing (we will not use this candidate)
	
	return VALIDATED_CIRCLES */

    interface CircleData {
        radius: number;
        x: number;
        y: number;
    }

function packedCircle(): CircleData[] {
    const validatedCircles = [];
    for (let i = 0; i <1000; i++){
        const candidate: CircleData = {
            radius: random(50, 200),
            x: random(50, 200),
            y: random(50, 200)
        }
        if (){}
        }
    }
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

function findD (circle1: CircleData, circle2:CircleData): number {
    let d = Math.sqrt(((circle1.x - circle2.x) **2) + ((circle1.y - circle2.y) **2))
    return d
}

// in packed circles for each item in validated circles call function findD(validatedcircles, candidate), if d < validatecircles.radius + candiate.radius it is not valid.
