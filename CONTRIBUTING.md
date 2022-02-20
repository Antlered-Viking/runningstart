# Getting Ready for Development

## Verdaccio

Please note that in a development environment, it would be ideal to utilize a private NPM registry to prevent public releases until the project is in a more stable state. This can be easily accomplished by installing Verdaccio[^verdaccio] using the commands below:

```bash
npm i -g verdaccio
mkdir /path/to/new/private/registry
cd /path/to/new/private/registry
verdaccio
```

Now, in another terminal you can run `npm adduser --registry http://localhost:4873` and create a new user for the private registry.

```bash
# npm notice Log in on http://localhost:4873/
# Username: username
# Password:
# Email: (this IS public) username@tld.com
# Logged in as username on http://localhost:4873/.
```

This project is already configured to utilize this location for publishing packages, and you will now be able to just work as per normal and not need to worry about packages being published to NPM's public registry. When you are ready to start publishing to the live NPM registry, simply open up `lerna.json` and remove the following option:

```json
 "command": {
    "publish": {
      "registry": "http://localhost:4873/"
    }
  }
```

## Lerna

Alright, now that we have a private NPM registry, we can move on to the next step: getting Lerna[^lerna] installed globally. _Super_ easy to do:

```bash
npm i -g lerna
```

## Visual Studio Code

We use Visual Studio Code[^vsc] for development in house, and we **strongly** suggest you do the same if you want to contribute to this project. We include a `.vscode` folder with suggested configurations and extensions that will make development much easier.

## Footnotes

[^verdaccio]: Verdaccio is a tool for running a private NPM registry with basically zero effort on your part. Learn more [here](https://verdaccio.org).
[^lerna]: Lerna is a tool for building and managing monorepos easily. Check it out [here](https://lerna.js.org).
[^vsc]: Visual Studio Code is an extremely extensible IDE that is lightweight and exceptionally powerful. Download it [here](https://code.visualstudio.com).
