const resolver  = require('@amjs/vue-tools/config/resolver');
const config    = require('@amjs/vue-tools/config/webpack/base');

const { module = {} } = config;
const { rules = [] } = module;

rules.unshift();
rules.shift(require(resolver('config/webpack/loader/react')));

module.exports  = config;
