/*
 *  Copyright 2020 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// create mocha instance
const Mocha = require('mocha');

const mochaMain = new Mocha({
  reporter: '@reportportal/agent-js-mocha',
  reporterOptions: {
    endpoint: 'https://reportportal.hwulleo.tech/api/v1',
    token: process.env.RP_TOKEN,
    launch: 'Mocha logging test',
    project: 'table_logging',
    description: 'Log a table nicely',
  },
  timeout: 250000,
});

// run tests
try {
  mochaMain.files = [
    'spec/tableLogging.spec.js',
  ];
  mochaMain.run((failures) => process.on('exit', () => process.exit(failures))); // exit with non-zero exit code, other wise fails will not fail mocha run
} catch (err) {
  console.error(`Test suite doesn't exists or set. Error: ${err}`);
}