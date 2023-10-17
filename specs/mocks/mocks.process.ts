import { _Types } from "./mocks.types.js";

export namespace _Process {
    export const originalMethods: _Types.Process.OriginalMethods = {
        process: {
            exit: process.exit,
        },
    };

    export function exit(): void {
        process.exit = <any>jest.fn().mockImplementation(() => {});
    }

    export function clean(): void {
        process.exit = originalMethods.process.exit;
    }
}
