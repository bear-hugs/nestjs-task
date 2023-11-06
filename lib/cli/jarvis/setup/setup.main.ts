import * as chalk from "chalk";

import { Core } from "@core/index.js";
import { Prompts } from "@prompts/index.js";

export class _Main {
    private readonly projectName: Prompts.ProjectName;

    public constructor() {
        this.projectName = new Prompts.ProjectName();
    }

    public async run(): Promise<void> {
        await this.projectName.run();

        await new Core.ProjectConfiguration.Setup(this.projectName.results).run();

        console.info(chalk.default.green("Your projects setup is completed!"));

        console.info("We updated the following files:");
        console.info(chalk.default.gray("- `<root>/nest-cli.json`"));

        const read = new Core.ProjectConfiguration.Read(this.projectName.results);
        await read.run();

        if (!read.resolveConfiguration.task) {
            return;
        }

        const entrypoint = new Core.ProjectConfiguration.Entrypoint(read.resolveConfiguration.task);
        const module = new Core.ProjectConfiguration.Module(read.resolveConfiguration.task);

        console.info("The following files was created:");
        console.info(chalk.default.gray(`- ${entrypoint.path}`));
        console.info(chalk.default.gray(`- ${module.path}`));
    }
}