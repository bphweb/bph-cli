#! /usr/bin/env node

const program = require("commander");
// const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
program
  // 定义命令和参数
  .command("create [name]")
  .description("create a new project")
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option("-f, --force", "overwrite target directory if it exist")
  .action((name, options) => {
    // 打印结果，输出用户手动输入的项目名字
    require("../lib/create.js")(name, options);
    // return inquirer
    //   .prompt([
    //     {
    //       type: "list",
    //       name: "framework",
    //       message: "请选择一个框架",
    //       choices: ["vue", "react"],
    //     },
    //   ])
    //   .then((answers) => {
    //     console.log(name, "选择的框架是：", answers);
    //   });
    // console.log("项目名是：", chalk.red(name));
    // console.log("项目名是：", chalk.blue(name));
    // console.log("项目名是：", chalk.yellow(name));
  });

program
  .command("config [value]")
  .description("inspect and modify the config")
  .option("-g, --get <path>", "get value from option")
  .option("-s, --set <path> <value>")
  .option("-d, --delete <path>", "delete option from config")
  .action((value, options) => {
    console.log("自定义config 命令：", value);
  });

program
  // 配置版本号信息
  .version(`v${require("../package.json").version}`)
  .usage("<command> [option]");

program
  // 监听 --help 执行
  .on("--help", () => {
    // 新增说明信息
    // 使用 figlet 绘制 Logo
    console.log(
      "\r\n" +
        figlet.textSync("BPH", {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        })
    );
    // 新增说明信息
    console.log(
      `\r\nRun ${chalk.cyan(`bph <command> --help`)} show details\r\n`
    );
  });
// 解析用户执行命令传入参数
program.parse(process.argv);
