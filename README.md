# @amjs/react-tools

![npm](https://img.shields.io/npm/v/@amjs/react-tools?style=flat-square)

Provides development tools for ReactJS based projects with Webpack4 and JEST.

## Installation

```bash
$ npm i --save @amjs/react-tools
```

## Usage

Add following scripts to `package.json` file:

```json
{
    "scripts": {
       "dev": "NODE_ENV=development node node_modules/@amjs/react-tools/scripts/server.js",
       "build": "NODE_ENV=production node node_modules/@amjs/react-tools/scripts/build.js",
       "test": "NODE_ENV=test node node_modules/@amjs/react-tools/scripts/jest.js",
       "format": "prettier --config node_modules/@amjs/react-tools/.prettierrc --write 'src/**/*.js'",
       "lint:css": "sass-lint --config node_modules/@amjs/react-tools/.sass-lint.yml -v",
       "lint:js": "eslint --fix --config node_modules/@amjs/react-tools/.eslintrc.yml --ext .js src __tests__",
       "e2e": "node node_modules/@amjs/react-tools/scripts/e2e chrome && node node_modules/.bin/nightwatch"
    }
}
```

## Tools

**@amjs/react-tools** provides a set-up of tools to use in any ReactJS project.

#### Fetch mock for tests

Just add following line to test file:

```javascript
import '%/tests/utils/fetch';
```
