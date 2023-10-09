import { isPackageExists } from "local-pkg";
import type { OptionsConfig } from "./types";

const VuePackages = ["vue", "nuxt", "vitepress"];
export function monousoooo(options: OptionsConfig) {
  const {
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    typescript: enableTypeScript = isPackageExists("typescript"),
    gitignore: enableGitignore = true,
    componentExts = [],
  } = options;

  if (enableVue) componentExts.push("vue");
}
