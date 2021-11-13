#!/usr/bin/env -S UV_THREADPOOL_SIZE=1 NODE_OPTIONS='--experimental-modules' node

const start = async function () {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  await delay(7000) /// waiting 7 second.
  console.log('a7a');
}

/* Copy */ start(); /* 1000 */
