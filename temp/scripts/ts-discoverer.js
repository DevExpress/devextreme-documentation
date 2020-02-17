#!/usr/bin/env node

const paths = require("./helpers.js").paths;
const tools = require("./tools.js");

tools.ensure(paths.jsDir);
tools.runTsDiscoverer(paths.jsDir);
