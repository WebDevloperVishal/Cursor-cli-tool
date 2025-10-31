import express from "express";
import { renderBanner } from "./cli/banner.js";
import { printSystem } from "./cli/output-formatter.js";
import { promptUser } from "./cli/inputer-handler.js";

async function main() {
    renderBanner()
    printSystem("Type '/help' for commands. Type '/exit' to quite. " )



    while(true){
        const userText = await promptUser();

        if(!userText) continue;
    }


}

main();