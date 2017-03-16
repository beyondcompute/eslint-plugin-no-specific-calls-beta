# eslint-plugin-no-specific-calls

Disallows calling certain functions or methods

## Installation

```
$ npm install --save-dev git+ssh://git@github.com/beyondcompute/eslint-plugin-no-specific-calls-beta.git
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-specific-calls-beta` globally.

## Usage

Add `no-specific-calls-beta` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-specific-calls-beta"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-specific-calls-beta/no-specific-calls": [1, [
            "fdescribe",
            "fit",
            "describe.only",
            "it.only",
            ".log"
        ]]
    }
}
```
