# @cabinllc/prettier-config

A comfortable Prettier configuration for React/Node projects written in TypeScript, enhanced with import sorting capabilities. This package extends Prettier's default formatting rules to ensure consistent code style across projects, while also organizing imports in a logical and readable manner.

## Features

- Configures tab width, trailing commas, and other formatting rules suitable for React/Node projects using TypeScript.
- Utilizes `@ianvs/prettier-plugin-sort-imports` for automatic import sorting, following a specified order that enhances code readability and maintenance.
- Easy to install and integrate into existing or new projects.

## Installation

To use this Prettier configuration in your project, follow these steps:

1. Install the configuration package as a development dependency:

```bash
npm install --save-dev @cabinllc/prettier-config
```

2. Create a `.prettierrc` file in the root of your project with the following content **and nothing else**:

```json
"@cabinllc/prettier-config"
```

