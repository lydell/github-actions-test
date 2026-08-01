const { spawnSync } = require("child_process");

spawnSync(
  'node',
  ['parent.js'],
  { encoding: 'utf-8', stdio: 'inherit' }
);
