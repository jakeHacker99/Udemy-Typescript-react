import { serve } from "./../../../local-api/src/index";
import { Command } from "commander";
import path from "path/posix";

export const serveCommand = new Command()
    .command("serve [filename] ")
    .description("Open a file for editing")
    .option("-p, --port <number>", "port to run server on", "4005")
    .action((filename = "notbook.js", options: { port: string }) => {
        const dir = path.join(process.cwd(), path.dirname(filename));
        serve(parseInt(options.port), path.basename(filename), dir);
    });
