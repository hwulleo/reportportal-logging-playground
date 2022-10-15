const expect = require('chai').expect;
const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');

describe('Logs for launch/suite/test', function () {
  before(function () {
    PublicReportingAPI.debug('debug suite log');
    PublicReportingAPI.trace('trace suite log');
    PublicReportingAPI.warn('warn suite log');
    PublicReportingAPI.error('error suite log');
    PublicReportingAPI.fatal('fatal suite log');
    PublicReportingAPI.info('info suite log');
  });
  it('should send logs to the launch', async function () {
    PublicReportingAPI.setDescription('This test sends logs with different levels to the launch');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'launchLogs',
      },
    ]);
    PublicReportingAPI.launchLog('INFO', 'launch log with manually specified info level');
    PublicReportingAPI.launchInfo('info launch log');
    PublicReportingAPI.launchDebug('debug launch log');
    PublicReportingAPI.launchTrace('trace launch log');
    PublicReportingAPI.launchWarn('warn launch log');
    PublicReportingAPI.launchError('error launch log');
    PublicReportingAPI.launchFatal('fatal launch log');
  });
  it('should send logs to the test item', function () {
    PublicReportingAPI.setDescription(
      'This test sends logs with different levels to the test item',
    );
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'testItemLogs',
      },
    ]);
    PublicReportingAPI.debug('debug message');
    PublicReportingAPI.trace('trace message');
    PublicReportingAPI.warn('warning  message');
    PublicReportingAPI.error('error  message');
    PublicReportingAPI.fatal('fatal  message');
    PublicReportingAPI.info('info  message');
    expect(true).to.be.equal(true);
  });
});