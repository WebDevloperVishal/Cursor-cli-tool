import express from "express";
import { renderBanner } from "./cli/banner.js";
import { printSystem } from "./cli/output-formatter.js";

async function main() {
    renderBanner()
    printSystem("Type '/help' for commands. Type '/exit' to quite. " )
}

main();