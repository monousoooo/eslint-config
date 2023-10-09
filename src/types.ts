export interface OptionsComponentExts {
  /**
   * 其他扩展组件
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[];
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * 启用gitignore支持
   *
   * @default true
   */
  gitignore?: boolean;

  /**
   * 启用TypeScript支持
   *
   * @default 基于依赖关系自动检测
   */
  typescript?: boolean;

  /**
   * 启用Vue支持
   *
   * @default 基于依赖关系自动检测
   */
  vue?: boolean;
}
