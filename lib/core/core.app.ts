import { Interfaces } from "@interfaces/index.js";
import { Patches } from "@patches/index.js";

import { _Errors } from "./errors/index.js";
import { _Enums } from "./core.enums.js";
import { _ArgumentsManager } from "./core.arguments-manager.js";
import { _Perform } from "./core.perform.js";
import { _State } from "./core.state.js";

export class _App {
    private tasks: Interfaces.General.AnyClass<any, any>[] = [];

    public async run(): Promise<void> {
        if (!this.tasks?.length) {
            throw new _Errors.NoTasksFound();
        }

        switch (_ArgumentsManager.runType) {
            case _Enums.RunTypes.Run:
                await this.handleRun();
                break;
            case _Enums.RunTypes.Info:
                this.handleInfo();
                break;
        }
    }

    public async load(module: Interfaces.General.AnyClass<any, any>): Promise<void> {
        this.getTasks(module);
    }

    private getTasks(module: Interfaces.General.AnyClass<any, any>): void {
        this.tasks = Patches.Reflect.getMetadata<Interfaces.General.AnyClass<any, any>[]>("tasks", module) ?? [];
    }

    private locateTaskClass(): Interfaces.General.AnyClass<any, any> | undefined {
        return this.tasks.find((value: Interfaces.General.AnyClass<any, any>): boolean => {
            const name = Patches.Reflect.getMetadata<string>("name", value);

            return name === _ArgumentsManager.taskName;
        });
    }

    private async handleRun(): Promise<void> {
        const taskClass = this.locateTaskClass();

        if (!taskClass) {
            throw new _Errors.NoSpecificTaskFound(_ArgumentsManager.taskName);
        }

        const perform = new _Perform(taskClass);

        await perform.run();
    }

    private handleInfo(): void {
        _State.tasksList = this.tasks;
    }
}