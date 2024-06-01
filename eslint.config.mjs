import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import nextPlugin from "@next/eslint-plugin-next";
import * as mdx from "eslint-plugin-mdx";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { plugins: { "@next/next": nextPlugin }},
  { ...mdx.flat },
  eslintPluginPrettierRecommended,
  {
    ignores: [".next/*", "node_modules/*"],
  },
];
