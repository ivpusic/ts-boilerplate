#!/usr/bin/env node

import * as program from 'commander';

import { instance as main } from '../index';

async function run() {
  program
    .parse(process.argv);

  main.run();
}

run().catch((e) => {
  console.log('Error', e);
});
