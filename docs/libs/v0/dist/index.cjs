'use strict';

var component = require('./component.cjs');
var componentInteraction = require('./componentInteraction.cjs');
var page = require('./page.cjs');
var website = require('./website.cjs');
var assertions = require('./assertions.cjs');
var actions = require('./actions.cjs');



exports.createComponent = component.createComponent;
exports.MissingComponentElementError = componentInteraction.MissingComponentElementError;
exports.createComponentInteraction = componentInteraction.createComponentInteraction;
exports.createStepWrapper = componentInteraction.createStepWrapper;
exports.createPage = page.createPage;
exports.createWebsite = website.createWebsite;
Object.defineProperty(exports, "Assertions", {
	enumerable: true,
	get: function () { return assertions.Assertions; }
});
Object.defineProperty(exports, "Actions", {
	enumerable: true,
	get: function () { return actions.Actions; }
});
