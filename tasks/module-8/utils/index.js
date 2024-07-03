'use strict';
const fs = require('fs');

const RESPONSE_JSON = `${process.cwd()}/tasks/nodeJs/fetch/response.json`;
const PARSED_JSON = `${process.cwd()}/tasks/nodeJs/parser/parsed.json`;

const cleanUpArtifacts = () => {
  for (const file of [RESPONSE_JSON, PARSED_JSON]) {
    if (fs.existsSync(file)) {
      fs.rmSync(file, { force: true });
    }
  }
};

module.exports = {
  cleanUpArtifacts,
};
