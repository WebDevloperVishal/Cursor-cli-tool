import chalk from "chalk";
import boxen from "boxen";

export function printSystem(text) {
  const boxed = boxen(chalk.yellow(text), {
    padding: 1,
    margin: 1,
    borderColor: 'yellow',
    borderStyle: 'round',
  });
  console.log(boxed);
}