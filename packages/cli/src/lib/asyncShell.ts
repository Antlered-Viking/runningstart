import { exec } from "child_process";

async function asyncShell(cmd: string): Promise<any> {
  await new Promise<void>((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      console.info(stdout);
      if (error !== null) {
        return reject(error);
      }
      if (stderr) {
        return console.error(stderr);
      }
      resolve();
    });
  });
}

export default asyncShell;
