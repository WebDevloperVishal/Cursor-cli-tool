// import express from "express";
// import { renderBanner } from "./cli/banner.js";
// import { printHelp, printSystem, printUser } from "./cli/output-formatter.js";
// import { promptUser } from "./cli/inputer-handler.js";
// import { safeExit } from "./utils/helper.js";
// import dotenv from "dotenv";
// import { google } from '@ai-sdk/google';
// import { generateText } from 'ai';

// dotenv.config();

// const message = [];

// async function main() {
//     renderBanner();
//     printSystem("Type '/help' for commands. Type '/exit' to quit.");

//     while (true) {
//         try {
//             const userText = await promptUser();

//             if (!userText || !userText.trim()) continue;

//             const command = userText.trim().toLowerCase();

//             if (command === "/exit") {
//                 await safeExit(0);
//                 return;
//             }

//             if (command === "/help") {
//                 printHelp();
//                 continue;
//             }

//             // Add user message to conversation history
//             message.push({
//                 role: "user",
//                 content: userText
//             });

//             printUser(userText);

//             // Generate AI response
//             const { text } = await generateText({
//                 model: google('gemini-2.5-flash'),
//                 messages: message,
//             });

//             // Add assistant response to conversation history
//             message.push({
//                 role: "assistant",
//                 content: text
//             });

//             printSystem(text);

//         } catch (error) {
//             // Handle specific error types
//             if (error.statusCode === 429) {
//                 printSystem("❌ Error: API quota exceeded. Please check your usage at https://ai.dev/usage");
//                 printSystem("💡 Tip: Wait a few minutes or upgrade your Google AI plan.");
//             } else if (error.statusCode === 401) {
//                 printSystem("❌ Error: Invalid API key. Please check your .env file.");
//                 break;
//             } else if (error.name === 'AI_APICallError' || error.name === 'AI_RetryError') {
//                 printSystem(`❌ API Error: ${error.message}`);
//             } else {
//                 printSystem(`❌ Unexpected Error: ${error.message}`);
//                 console.error('Full error:', error);
//             }
            
//             // Don't exit on error, continue the loop
//             continue;
//         }
//     }
// }

// main().catch((error) => {
//     console.error('Fatal error:', error);
//     process.exit(1);
// });

import express from "express";
import { renderBanner } from "./cli/banner.js";
import { printHelp, printSystem, printUser } from "./cli/output-formatter.js";
import { promptUser } from "./cli/inputer-handler.js";
import { safeExit } from "./utils/helper.js";
import dotenv from "dotenv";

import { google } from '@ai-sdk/google';
import { convertToModelMessages, generateText } from 'ai';

dotenv.config();

const message = [];

async function main() {
    renderBanner()
    printSystem("Type '/help' for commands. Type '/exit' to quite. ")

    while (true) {
        const userText = await promptUser();

        if (!userText) continue;

        if (userText.trim().toLowerCase() === "/exit") {
            await safeExit(0);
            return;
        }

        if (userText.trim().toLowerCase() === "/help") {
            printHelp();
            return;
        }

        message.push({
            role: "user",
            parts: [
                {
                    type: "text",
                    text: userText
                }
            ]
        })

        printUser(userText)


        const { text } = await generateText({
            model: google('gemini-2.5-flash'),
            prompt: convertToModelMessages(message),
        });

        printSystem(text);
    }

}

main();