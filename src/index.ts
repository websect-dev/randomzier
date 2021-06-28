/**
 * Default constants if custom values aren't declared
 */
 const CONSTANTS = {
    SMALL: 100,
    BIG: 10000,
    HUGE: 100000
}


class Randozzier {
    private start: number
    private end: number
    private step: number

    constructor() {
        this.start = 0
        this.end = CONSTANTS.SMALL
        this.step = 1
    }

    /**
     * Generates random number using 3 properties
     * @param start - left border of the bounded interval 
     * @param end - right border of the bounded interval 
     * @param step - step of the changes in the interval
     */


    generate(start?: number, end?: number, step?: number): number {
        this.start = start
        this.end = end
        this.step = step

        return 0
    }
}


let zier = new Randozzier()
console.log(zier.generate);
