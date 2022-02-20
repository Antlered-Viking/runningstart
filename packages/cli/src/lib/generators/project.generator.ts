import { mkdirSync } from "fs";
import { join } from "path";
import { cwd } from "process";
import asyncShell from "../asyncShell";

let projectPath = "";

const createDir = (dirName: string) => {
  projectPath =
    process.env.NODE_ENV === "development"
      ? join(cwd(), "..", dirName)
      : join(cwd(), dirName);
  try {
    mkdirSync(projectPath, { recursive: true });
  } catch (error) {
    console.error(error);
  }
  process.chdir(projectPath);
};

const initGit = async () => {
  const { stdout, stderr } = await asyncShell("git init");
  if (stderr) {
    console.error(stderr);
    return;
  } else {
    console.info(stdout);
  }
};

const initLerna = async (useIndependentVersions: boolean = true) => {
  const { stdout, stderr } = await asyncShell(
    useIndependentVersions ? "lerna init --independent" : "lerna init"
  );
  if (stderr) {
    console.error(stderr);
    return;
  } else {
    console.info(stdout);
    return;
  }
};

const generateProject = async (
  projectName: string = "my-awesome-fullstack-project",
  useGit: boolean = true,
  useIndependentVersions: boolean = true
) => {
  createDir(projectName);
  if (useGit) {
    await initGit();
  }
  await initLerna(useIndependentVersions);
  //TODO continue adding more questions here

  console.info(`New full stack project generated at ${projectPath}`);
};

export default generateProject;
