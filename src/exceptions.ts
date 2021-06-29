export class CustomException extends Error {
    constructor(name: string, message: string) {
        super(message)
        this.name = name
        this.message = message
    }
}

export function wrongInterval(start: number, end: number) {
    if (start > end) throw new CustomException("Wrong interval", "Left border is greater than a right border.")
}

export function invalidArguments(start: number, end: number, step: number) {
    if (start === undefined || end === undefined || step === undefined) 
        throw new CustomException("Wrong arguments", `Invalid number of arguments. Expected ${arguments.length}.`)
}