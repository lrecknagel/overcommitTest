# Overcommit Test

This repo is for testing [overcommit](https://github.com/brigade/overcommit) featuers.

#### How to
  * Clone the repo
  * run: `yarn`. This ensures that overcommit will be initialized or shows a warning to install it
  * When you have setup overcommit successfully ...
    * violate a eslint rule (eg write: `const a = 10` and dont place a semicolon on the EOL.)
    * add another `// FIXME: ..., // TODO: ...` comment in the _app.js_