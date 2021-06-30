import { invalidArguments, wrongInterval } from "./exceptions"

interface IRandomzier {
    generate(start?: number, end?: number, step?: number): number
}

export class Randomzier implements IRandomzier {
    private start: number = 1
    private end: number = 100
    private step: number = 1

    constructor() {}

    /**
     * Generates random number.
     * @param start - left border of the bounded interval.
     * @param end - right border of the bounded interval.
     * @param step - step of the changes in the interval.
     * @note Empty argument list returns random argument from [0, 100] with the step of 1.
     */

    generate(start?: number, end?: number, step?: number): number {
        if (start != undefined && end != undefined && step != undefined) {
            wrongInterval(start, end)

            this.start = start
            this.end = end
            this.step = step
        } else {
            invalidArguments(start, end, step)
        }

        const m = this.end
        const a = 1
        const c = this.step
        let arr: Array<number> = [this.start, this.start + this.step]
        for (let iterator = 2; iterator < 100; iterator++) {
            // Linear congruential generator
            if ((a * arr[iterator - 1] + c) % m <= this.end)
                arr[iterator] = (a * arr[iterator - 1] + c) % m
        }

        return arr[Math.floor(Math.random() * arr.length)]
    }
}