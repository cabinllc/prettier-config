# prettier-config
Cabin's Prettier configuration for use across all projects

## Usage

Install the package:

```bash
npm install --save-dev @cabinllc/prettier-config
```

Add the following to your `package.json`:

```json
{
  "prettier": "@cabinjs/prettier-config"
}
```

Install peer dependencies:

```bash
npx install-peerdeps --dev @cabinllc/prettier-config
```

You can also copy the libraries defined in peerDependencies fields into the devDependencies section of your package.json.