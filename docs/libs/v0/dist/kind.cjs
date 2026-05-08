'use strict';

var utils = require('@duplojs/utils');

const createDuplojsPlaywrightKind = utils.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsPlaywright");

exports.createDuplojsPlaywrightKind = createDuplojsPlaywrightKind;
