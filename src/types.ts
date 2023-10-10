import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'
import type { ParserOptions } from '@typescript-eslint/parser'
import type {
  EslintCommentsRules,
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  JsoncRules,
  MergeIntersection,
  NRules,
  Prefix,
  RenamePrefix,
  RuleConfig,
  TypeScriptRules,
  UnicornRules,
  VitestRules,
  VueRules,
  YmlRules,
} from '@monousoooo/eslint-define-config'
import type { StylisticRules } from './generated/stylistic'

export type Rules = MergeIntersection<
  RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'> &
  RenamePrefix<VitestRules, 'vitest/', 'test/'> &
  RenamePrefix<YmlRules, 'yml/', 'yaml/'> &
  RenamePrefix<NRules, 'n/', 'node/'> &
  Prefix<StylisticRules, 'style/'> &
  ImportRules &
  EslintRules &
  JsoncRules &
  VueRules &
  UnicornRules &
  EslintCommentsRules & {
    'test/no-only-tests': RuleConfig<[]>
  }
>

export type ConfigItem = Omit<FlatESLintConfigItem<Rules, false>, 'plugins'> & {
  /**
   * 配置项自定义名称
   */
  name?: string

  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>
}

export interface OptionsTypeScriptParserOptions {
  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>
}

export interface OptionsStylistic {
  stylistic?: boolean | StylisticConfig
}

export interface OptionsHasTypeScript {
  typescript?: boolean
}

export interface StylisticConfig {
  indent?: number | 'tab'
  quotes?: 'single' | 'double'
  jsx?: boolean
}

export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string
}

export interface OptionsOverrides {
  overrides?: ConfigItem['rules']
}

export interface OptionsIsInEditor {
  isInEditor?: boolean
}

export interface OptionsComponentExts {
  /**
   * 其他扩展组件
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[]
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * 启用gitignore支持
   *
   * @default true
   */
  gitignore?: boolean | FlatGitignoreOptions

  /**
   * 启用TypeScript支持
   *
   * @default 基于依赖关系自动检测
   */
  typescript?: boolean | OptionsTypeScriptWithTypes

  /**
   * 启用与JSX相关的规则
   *
   * @default true
   */
  jsx?: boolean

  /**
   * 启用test支持
   *
   * @default true
   */
  test?: boolean

  /**
   * 启用Vue支持
   *
   * @default 基于依赖关系自动检测
   */
  vue?: boolean

  /**
   * 启用JSONC支持
   *
   * @default true
   */
  jsonc?: boolean

  /**
   * 启用YAML支持
   *
   * @default true
   */
  yaml?: boolean

  /**
   * 启用Markdown支持
   *
   * @default true
   */
  markdown?: boolean

  /**
   * 启用stylistic规则
   *
   * @default true
   */
  stylistic?: boolean | StylisticConfig

  /**
   * 用于禁用编辑器中的某些规则的控件
   *
   * @default 自动检测 process.env
   */
  isInEditor?: boolean

  /**
   * 为每个集成的规则提供替代
   */
  overrides?: {
    javascript?: ConfigItem['rules']
    typescript?: ConfigItem['rules']
    test?: ConfigItem['rules']
    vue?: ConfigItem['rules']
    jsonc?: ConfigItem['rules']
    markdown?: ConfigItem['rules']
    yaml?: ConfigItem['rules']
  }
}
