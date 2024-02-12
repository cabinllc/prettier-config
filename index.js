/**
 * @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
    tabWidth: 4,
    trailingComma: "es5",
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        ".css$",
        "",
        "<TYPES>",
        "<TYPES>^[.]",
        "",
        "^react$",
        "<THIRD_PARTY_MODULES>",
        "",
        "^~/",
        "^[.][.]/",
        "^[.]/",
    ],
    importOrderParserPlugins: ["typescript", "jsx"],
    importOrderTypeScriptVersion: "5.3.0",
};

export default config;
