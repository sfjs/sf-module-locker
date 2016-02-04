"use strict";
import sf from 'sf';//resolved in webpack's "externals"
import Lock from './Lock';

sf.registerInstanceType(Lock);

module.exports = Lock;   // ES6 default export will not expose us as global