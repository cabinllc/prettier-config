import chalk from "chalk";

const log = console.log;

const brandColors = {
    purple: "#be44c2",
    lightpurple: "#e5b4e7",
    blue: "#019acc",
    lightblue: "#67c2e0",
    green: "#82d900",
    lightgreen: "#b4e866",
    yellow: "#ffc70d",
    lightyellow: "#ffdd6e",
    orange: "#ff571f",
    lightorange: "#ff9a79",
};

// Log brand message
log(
    chalk.hex(brandColors.purple).bold("@") +
        chalk.hex(brandColors.lightpurple).bold("c") +
        chalk.hex(brandColors.blue).bold("a") +
        chalk.hex(brandColors.lightblue).bold("b") +
        chalk.hex(brandColors.green).bold("i") +
        chalk.hex(brandColors.lightgreen).bold("n") +
        chalk.hex(brandColors.yellow).bold("l") +
        chalk.hex(brandColors.lightyellow).bold("l") +
        chalk.hex(brandColors.orange).bold("c") +
        " " +
        chalk.bold("prettier config")
);

log(`
  To use @cabinllc/prettier-config, add the following to your package.json:

  "prettier": "@cabinllc/prettier-config"

  You can use prettier without installing it yourself:

  "scripts": {
    "format": "prettier --write \\"**/*.{js,jsx,ts,tsx}\\""
  }
`);
