import path from "path";

import * as chalk from "chalk";

import { Core } from "@core/index.js";
import { Generators } from "@generators/index.js";

export class _Create {
    public constructor(
        private readonly moduleName: string,
        private readonly moduleDescription: string,
        private readonly projectName?: string,
    ) {}

    public async run(): Promise<void> {
        const read = new Core.ProjectConfiguration.Read(this.projectName);
        await read.run();

        if (!read.resolveConfiguration.task) {
            return;
        }

        const generator = new Generators.Create(
            this.moduleName,
            read.resolveConfiguration.task.path,
            this.moduleDescription,
        );

        await generator.run();

        console.info("We created the following directory:");
        console.info(chalk.default.gray(`- ${path.join(read.resolveConfiguration.task.path, this.moduleName)}`));
        console.info();
        console.info("Don't forget to update `task.module.ts` file to include new runner!");
    }
}
