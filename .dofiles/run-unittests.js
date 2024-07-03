const { execSync } = require('child_process');

const moduleRegExp = /^tasks\/(module-[1-8])\/(?:.*)/;

const consoleColors = {
  settings: {
    reset: '\x1b[0m',
  },
  bg: {
    red: '\x1b[41m',
    green: '\x1b[42m',
    blue: '\x1b[44m',
    yellow: '\x1b[43m',
    cyan: '\x1b[46m',
  },
  fg: {
    red: '\x1b[31m',
  },
};

console.log(consoleColors.bg.cyan, '🤖 Checking committed changes...', consoleColors.settings.reset);

execSync('git fetch origin master --quiet');

const changedModules = execSync('git diff --name-only origin/master --')
  .toString('utf-8')
  .split('\n')
  .map(item => {
    if (item === 'package.json') {
      return 'module-1';
    } else if (moduleRegExp.test(item)) {
      return item.match(moduleRegExp)[1];
    }
  })
  .filter(item => !!item);

if (!changedModules.length) {
  console.warn(
    consoleColors.bg.yellow,
    'Unit tests were skipped because there were no changes to the tasks.',
    consoleColors.settings.reset,
  );
  return;
}

const modulesMapping = {
  'module-1': ['test:intro'],
  'module-2': ['test:variables'],
  'module-3': ['test:cycles', 'test:condition'],
  'module-4': ['test:functions'],
  'module-5': ['test:arrays', 'test:strings'],
  'module-6': ['test:objects', 'test:classes', 'test:po'],
  'module-7': ['test:async'],
  'module-8': ['test:nodejs'],
};

let failedSuites = 0;

for (const module of new Set(changedModules)) {
  const npmScripts = modulesMapping[module];

  if (!npmScripts) {
    continue;
  }

  for (const script of npmScripts) {
    try {
      console.info(consoleColors.bg.blue, `Running '${script}' npm script...`, consoleColors.settings.reset);
      execSync(`npm run ${script}`);
    } catch (e) {
      if (e.stdout) {
        console.error(consoleColors.fg.red, e.stdout.toString('utf-8').replace(/\n\n\n\n/g, '\n'), consoleColors.settings.reset);
      }
      failedSuites++;
    }
  }
}

if (failedSuites > 0) {
  console.error(consoleColors.bg.red, 'Unit tests failed. Please check logs above.', consoleColors.settings.reset);
  process.exit(1);
} else {
  console.log('\n');
  console.info(consoleColors.bg.green, 'All unit tests passed successfully.', consoleColors.settings.reset);
  process.exit(0);
}
