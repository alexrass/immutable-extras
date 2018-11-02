require('colors');
const { exec } = require('child_process');
const { Spinner } = require('cli-spinner');

const spinner = new Spinner();

async function runEslint() {
  return await new Promise((resolve) => {
    const cmd = 'node_modules/.bin/eslint lib --fix';
    console.log(`\n${ cmd }`);
    spinner.start();

    exec(cmd, (_, stdout, stderr) => {
      spinner.stop(true);

      console.log(stdout.toString());

      if (!!stderr) {
        console.log(stderr.toString().red);
      }

      resolve();
    });
  });
}

module.exports = async function() {
  await runEslint();
};
