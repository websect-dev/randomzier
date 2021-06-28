/**
 * Default constants if custom values aren't declared.
 */
const CONSTANTS = {
    SMALL: 100,
    BIG: 10000,
    HUGE: 100000
}


class Randozzier {
    constructor(private start?: number, private end?: number, private step?: number) {
        this.start = 0
        this.end = CONSTANTS.SMALL
        this.step = 1
    }

    readonly DIVIDER = new Date().getTime()

    /**
     * Generates random number.
     * @param start - left border of the bounded interval.
     * @param end - right border of the bounded interval.
     * @param step - step of the changes in the interval.
     * @note Empty argument list returns random argument from [0, 100] with the step of 1.
     */

    generate(start?: number, end?: number, step?: number): number {
        if (start != undefined && end != undefined && step != undefined) {
            this.start = start
            this.end = end
            this.step = step
        }

        for (let iterator = this.start; iterator <= this.end; iterator += this.step) {
            if (Math.round(this.DIVIDER / (iterator + Math.floor(Math.random() * this.step))) % 12 === 0) {
                return iterator
            } 
            else {
                return this.end - (Math.floor(Math.random() * 4) * this.step)
            }
        }
    }
}