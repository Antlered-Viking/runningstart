import { config } from "dotenv-safe";
config();

import generateProject from "./lib/generators/project.generator";
import header from "./lib/header";
import initializationPrompt from "./lib/prompters/initialization.prompter";

const runCli = async () => {
  console.log(process.env.NODE_ENV);
  console.log(header);
  const { projectName, git, useIndependent } = await initializationPrompt();
  await generateProject(projectName, git, useIndependent);
};

export default runCli;

runCli();
