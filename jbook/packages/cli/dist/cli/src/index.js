"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serve_1 = require("./commands/serve");
var commander_1 = require("commander");
commander_1.program.addCommand(serve_1.serveCommand);
commander_1.program.parse(process.argv);
