import { exec } from "child_process";

async function asyncShell(cmd: string): Promise<any> {
  await exec(cmd, (error, stdout, stderr) => {
    if (error) {
      return console.error(error.message);
    }
    if (stderr) {
      return console.error(stderr);
    }
    return stdout;
  });
}

export default asyncShell;
