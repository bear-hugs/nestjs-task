import { Core } from "@core/index.js";

import { _Core } from "@cli/core/index.js";

export class _Main {
    public constructor(
        private readonly taskName: string,
        private readonly projectName: string | undefined,
    ) {
        Core.ArgumentsManager.runType = Core.Enums.RunTypes.Run;
    }

    public async run(): Promise<void> {
        await new _Core.Run(this.taskName, this.projectName).run();
    }
}
