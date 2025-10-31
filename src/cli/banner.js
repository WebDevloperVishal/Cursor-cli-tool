import figlet from "figlet";
import boxen from "boxen";
import chalk from "chalk";

export function renderBanner(){
    const title = figlet.textSync("OrbitAI", {
        horizontalLayout: "fillted"
    })

    const subtitle = `${chalk.cyan('Gemini-powered')} ${chalk.gray("•")} ${chalk.magenta} ${chalk.magenta("Cli Chat")}`

    const content = `${title}\n${subtitle}`;

    const boxed = boxen(content , {
        padding: 1,
        margin: 1,
        borderColor:"cyan",
        borderStyle:"round"
    })

    console.log(boxed)
}