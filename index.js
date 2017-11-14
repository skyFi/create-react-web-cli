#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

exports.copyTemplate = (from, to) => {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
};

exports.write = (path, str, mode) => {
  fs.writeFileSync(path, str)
};


exports.mkdir = (path, fn) => {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
};