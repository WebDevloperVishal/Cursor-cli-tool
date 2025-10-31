import express from "express";
import { renderBanner } from "./cli/banner.js";
import { printHelp, printSystem } from "./cli/output-formatter.js";
import { promptUser } from "./cli/inputer-handler.js";
import { safeExit } from "./utils/helper.js";

async function main() {
    renderBanner()
    printSystem("Type '/help' for commands. Type '/exit' to quite. " )



    while(true){
        const userText = await promptUser();

        if(!userText) continue;

        if(userText.trim().toLowerCase() ==="/exit"){
            await safeExit(0);
            return;
        }


        if(userText.trim().toLowerCase() ==="/help"){
            printHelp();
            return;
        }


    }


}

main();