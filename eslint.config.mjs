import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import * as mdx from "eslint-plugin-mdx";
//import "eslint-plugin-only-warn";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { plugins: { "@next/next": nextPlugin } },
  { ...mdx.flat },
  { plugins: { react: reactPlugin } },
  { plugins: { "react-hooks": reactHooksPlugin } },
  prettierPlugin,
  {
    ignores: [".next/*", "node_modules/*"],
  },
];
