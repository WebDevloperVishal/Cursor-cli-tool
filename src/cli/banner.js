import figlet from "figlet";
import boxen from "boxen";
import chalk from "chalk";

export function renderBanner(){
    const title = figlet.textSync("OrbitAI", {
        horizontalLayout: "fillted"
    })

    

    console.log(title)
}