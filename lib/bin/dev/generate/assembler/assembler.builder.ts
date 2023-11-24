import { Patches } from "@patches/index.js";

import { _Types } from "./assembler.types.js";
import { _Constants } from "./assembler.constants.js";

export class _Builder {
    public constructor() {}

    public folder(fileLines: _Types.FileLines): _Types.Builder.Folder.Return {
        return function (folder: string): void {
            const moduleName = new Patches.String(folder).capitalize().toPascalCase();
            const variableName = `$_${moduleName}`;
            const exportFrom = `./${folder}`;
            const subModuleName = [variableName, moduleName].join("._");

            fileLines.imports.folders.push(
                _Constants.Template.Import.folder.namedInterpolation({ variableName, exportFrom }).toString(),
            );
            fileLines.exports.folders.push(
                _Constants.Template.Export.statement.namedInterpolation({ moduleName, subModuleName }).toString(),
            );
        };
    }

    public file(fileLines: _Types.FileLines): _Types.Builder.File.Return {
        return function (file: string): void {
            const isFileIgnored = _Constants.Files.ignore.some((item: string): boolean => file.endsWith(item));

            if (isFileIgnored) {
                return;
            }

            const moduleName = new Patches.String(file.split(".").at(-1)).capitalize().toPascalCase();
            const variableName = `$_${moduleName}`;
            const exportFrom = `./${file}`;
            const subModuleName = [variableName, moduleName].join("._");

            switch (moduleName.toString()) {
                case "Constants":
                    fileLines.imports.constants.push(
                        _Constants.Template.Import.file.namedInterpolation({ variableName, exportFrom }).toString(),
                    );
                    fileLines.exports.constants.push(
                        _Constants.Template.Export.statement
                            .namedInterpolation({ moduleName, subModuleName })
                            .toString(),
                    );
                    break;
                case "Types":
                    fileLines.imports.types.push(
                        _Constants.Template.Import.file.namedInterpolation({ variableName, exportFrom }).toString(),
                    );
                    fileLines.exports.types.push(
                        _Constants.Template.Export.statement
                            .namedInterpolation({ moduleName, subModuleName })
                            .toString(),
                    );
                    break;
                default:
                    fileLines.imports.files.push(
                        _Constants.Template.Import.file.namedInterpolation({ variableName, exportFrom }).toString(),
                    );
                    fileLines.exports.files.push(
                        _Constants.Template.Export.statement
                            .namedInterpolation({ moduleName, subModuleName })
                            .toString(),
                    );
                    break;
            }
        };
    }
}