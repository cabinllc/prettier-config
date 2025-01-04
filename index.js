{
    "$schema": "https://json.schemastore.org/prettierrc",
    "tabWidth": 4,
    "trailingComma": "es5",
    "plugins": [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-packagejson",
        "prettier-plugin-jsdoc"
    ],
    "importOrder": [
        ".css$",
        "",
        "<TYPES>^(node:)",
        "<TYPES>",
        "<TYPES>^[.]",
        "",
        "^react$",
        "<BUILTIN_MODULES>",
        "<THIRD_PARTY_MODULES>",
        "",
        "@campfire/",
        "^~/",
        "^@/",
        "^[.][.]/",
        "^[.]/"
    ],
    "importOrderParserPlugins": ["typescript", "jsx"],
    "importOrderTypeScriptVersion": "5.6.2",
    "tsdoc": true,
    "overrides": [
        {
            "files": "*.jsonc",
            "options": {
                "trailingComma": "none"
            }
        }
    ]
}
