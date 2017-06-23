/**
 * This interface makes sure we don't miss adding a property to both `prod` and `test`
 */
interface Config {
  someItem: string;
}

/**
 * We only export a single thing. The config.
 */
export let config: Config;

/**
 * `process.env.NODE_ENV` definition is driven from webpack
 *
 * The whole `else` block will be removed in the emitted JavaScript
 *  for a production build
 */
if ('production' === process.env.NODE_ENV) {
  config = {
    someItem: 'prod'
  };
  console.log('Running in prod');
} else {
  config = {
    someItem: 'test'
  };
  console.log('Running in test');
}