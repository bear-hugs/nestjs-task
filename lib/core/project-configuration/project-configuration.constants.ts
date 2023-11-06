import * as path from "path";

import { _Types } from "./project-configuration.types.js";

export namespace _Constants {
    export const configurationFileName: Readonly<string> = "nest-cli.json";

    export namespace Main {
        export const compiledFolder: Readonly<string> = "dist";
    }

    export namespace Setup {
        export const defaultFolderName: Readonly<string> = "tasks";

        export const defaultConfiguration: Readonly<_Types.Task> = {
            path: path.join("src", defaultFolderName),
            entryPoint: "main.ts",
        };

        export const modulePath: Readonly<string> = "tasks.module.ts";
    }

    export namespace Templates {
        const templatesFolder: Readonly<string> = path.join("core", "project-configuration", "templates");

        export const entrypointPath: Readonly<string> = path.join(templatesFolder, "templates.entrypoint.template");

        export const modulePath: Readonly<string> = path.join(templatesFolder, "templates.module.template");
    }
}
