// Flags: --experimental-modules
/* eslint-disable node-core/require-common-first, node-core/required-modules */

import { createRequireFromPath } from 'module';
import { fileURLToPath as toPath } from 'url';

function createRequire(metaUrl) {
  return createRequireFromPath(toPath(metaUrl));
}

const require = createRequire(import.meta.url);
const common = require('./index.js');

const {
  isMainThread,
  isWindows,
  isAIX,
  isLinuxPPCBE,
  isSunOS,
  isFreeBSD,
  isOpenBSD,
  isLinux,
  isOSX,
  enoughTestMem,
  enoughTestCpu,
  rootDir,
  buildType,
  localIPv6Hosts,
  opensslCli,
  PIPE,
  hasIPv6,
  childShouldThrowAndAbort,
  createZeroFilledFile,
  platformTimeout,
  allowGlobals,
  mustCall,
  mustCallAtLeast,
  hasMultiLocalhost,
  skipIfEslintMissing,
  canCreateSymLink,
  getCallSite,
  mustNotCall,
  printSkipMessage,
  skip,
  ArrayStream,
  nodeProcessAborted,
  busyLoop,
  isAlive,
  expectWarning,
  expectsError,
  skipIfInspectorDisabled,
  skipIf32Bits,
  getArrayBufferViews,
  getBufferSources,
  disableCrashOnUnhandledRejection,
  getTTYfd,
  runWithInvalidFD
} = common;

export {
  isMainThread,
  isWindows,
  isAIX,
  isLinuxPPCBE,
  isSunOS,
  isFreeBSD,
  isOpenBSD,
  isLinux,
  isOSX,
  enoughTestMem,
  enoughTestCpu,
  rootDir,
  buildType,
  localIPv6Hosts,
  opensslCli,
  PIPE,
  hasIPv6,
  childShouldThrowAndAbort,
  createZeroFilledFile,
  platformTimeout,
  allowGlobals,
  mustCall,
  mustCallAtLeast,
  hasMultiLocalhost,
  skipIfEslintMissing,
  canCreateSymLink,
  getCallSite,
  mustNotCall,
  printSkipMessage,
  skip,
  ArrayStream,
  nodeProcessAborted,
  busyLoop,
  isAlive,
  expectWarning,
  expectsError,
  skipIfInspectorDisabled,
  skipIf32Bits,
  getArrayBufferViews,
  getBufferSources,
  disableCrashOnUnhandledRejection,
  getTTYfd,
  runWithInvalidFD,
  createRequire
};
