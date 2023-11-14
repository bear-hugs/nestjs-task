import * as chalk from "chalk";

import { Core } from "@core/index.js";
import { Patches } from "@patches/index.js";

export class _Help {
    public constructor() {}

    public async run(): Promise<void> {
        const emptyString = new Patches.String(" ");

        console.info(chalk.default.cyan("Thank you for using @bear-hugs/nest-task!"));

        console.info();

        console.info(
            "@bear-hugs/nest-task is supplied with 2 versions of CLI, basic commands and interactive assistant.",
        );

        console.info();

        console.info("Basic syntax:");
        console.info();
        console.info(chalk.default.cyan("nest-task <command>"));
        console.info();

        console.info("Commands:");
        console.info();
        console.info(chalk.default.cyan("nest-task help"));
        console.info("List of available commands, AKA this prompt");
        console.info();

        console.info(chalk.default.cyan("nest-task jarvis"));
        console.info(
            "Interactive assistant. Can perform the same actions as basic commands but in more human friendly way.",
        );
        console.info();

        console.info(chalk.default.cyan("nest-task info --project-name <project-name>"));
        console.info("Provide a list of tasks names and description.");
        console.info();
        console.info(emptyString.times(3), chalk.default.cyan("<project-name>"), emptyString.times(10), "Optional.");
        console.info(
            emptyString.times(28),
            "In case your",
            chalk.default.cyan("`nest-cli.json`"),
            "have",
            chalk.default.cyan("`projects`"),
            "key defined.",
        );
        console.info();

        console.info(chalk.default.cyan("nest-task run --projectName <project-name> --name <name> <other-argument>"));
        console.info("Execute the task, can be found by name");
        console.info();
        console.info(emptyString.times(3), chalk.default.cyan("<project-name>"), emptyString.times(10), "Optional.");
        console.info(
            emptyString.times(28),
            "In case your",
            chalk.default.cyan("`nest-cli.json`"),
            "have",
            chalk.default.cyan("`projects`"),
            "key defined.",
        );
        console.info(emptyString.times(28), "This argument should come first before name of the task");
        console.info(emptyString.times(3), chalk.default.cyan("<other-arguments>"), emptyString.times(7), "Optional.");
        console.info(
            emptyString.times(28),
            "In case your you need to pass additional arguments to your task you can easily achieve this with same syntax as you pass <name>",
        );
        console.info(emptyString.times(28), "For example:");
        console.info(emptyString.times(28), chalk.default.cyan('--userId 3 --bio "I\'m awesome"'));
        console.info(emptyString.times(3), chalk.default.cyan("<name>"), emptyString.times(18), "Required.");
        console.info(
            emptyString.times(28),
            "Name of the task defined in",
            chalk.default.cyan("@Decorators.Task"),
            chalk.default.cyan("`name`"),
            "key",
        );
        console.info();

        console.info(
            chalk.default.cyan(
                "nest-task create --projectName <project-name> --name <name> --description <description>",
            ),
        );
        console.info(
            "Run this command as a generator to create task boilerplate, that includes",
            chalk.default.cyan("@Decorators.Runner"),
            "and",
            chalk.default.cyan("@Decorators.Task."),
        );
        console.info();
        console.info(emptyString.times(3), chalk.default.cyan("<project-name>"), emptyString.times(10), "Optional.");
        console.info(
            emptyString.times(28),
            "In case your",
            chalk.default.cyan("`nest-cli.json`"),
            "have",
            chalk.default.cyan("`projects`"),
            "key defined.",
        );
        console.info(emptyString.times(3), chalk.default.cyan("<name>"), emptyString.times(18), "Required.");
        console.info(
            emptyString.times(28),
            "Expect to receive a task name, which should converted to file name and class name.",
        );
        console.info(emptyString.times(3), chalk.default.cyan("<description>"), emptyString.times(11), "Required.");
        console.info(
            emptyString.times(28),
            "Short description of task. In case if it's a long sentence use",
            chalk.default.cyan('`"`'),
            "to screen it.",
        );
        console.info(emptyString.times(28), "For example:");
        console.info(emptyString.times(28), chalk.default.cyan('--description "The task example"'));
        console.info();

        console.info(chalk.default.cyan("nest-task setup --projectName <project-name> --convention <convention>"));
        console.info("Used in purpose to run first initial setup of the", chalk.default.cyan("@bear-hugs/nest-task."));
        console.info(
            "Performs 3 basic actions: modify",
            chalk.default.cyan("`nest-cli.json`,"),
            "creates an entrypoint for tasks to run and creates an example of task.",
        );
        console.info();
        console.info(emptyString.times(3), chalk.default.cyan("<project-name>"), emptyString.times(10), "Optional.");
        console.info(
            emptyString.times(28),
            "In case your",
            chalk.default.cyan("`nest-cli.json`"),
            "have",
            chalk.default.cyan("`projects`"),
            "key defined.",
        );
        console.info(emptyString.times(3), chalk.default.cyan("<convention>"), emptyString.times(12), "Required.");
        console.info(
            emptyString.times(28),
            "Specify naming convention for files and classes. Options are",
            Object.values(Core.ProjectConfiguration.Constants.convention).join(", "),
        );
    }
}