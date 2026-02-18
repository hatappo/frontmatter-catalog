<div align="center">

English | [日本語](README_ja.md)

</div>

# Frontmatter Schema Catalog

A collection of schema definitions for Markdown frontmatter
used by various tools and services.

## Directory Structure

Schema files are organized under `schemas/` directory:

```
schemas/
├── ai/                    # AI coding agents
│   ├── anthropics/claude-code/
│   ├── openai/codex/
│   └── cursor/
├── ssg-astro/             # Astro themes
│   └── {owner}/{repo}/
├── ssg-hugo/              # Hugo
├── ssg-jekyll/            # Jekyll
├── blog-platform/         # Blog platforms
│   ├── zenn/
│   ├── qiita/
│   └── devto/
├── note-taking/           # Note-taking apps
│   ├── obsidian/
│   └── dendron/
├── slide/                 # Presentation tools
│   ├── slidevjs/slidev/
│   └── marp-team/marp-core/
└── ...
```

## File Naming

Schema files use the following naming convention:

- `*.md.ts` — Markdown frontmatter schema
- `*.yaml.ts` — YAML configuration file schema
- `*.toml.ts` — TOML configuration file schema

## Schema Format

Schemas are defined as TypeScript interfaces with JSDoc comments.

### Interface JSDoc Tags

| Tag | Required | Description |
|-----|----------|-------------|
| `@source` | Yes | URL of the original documentation. Multiple URLs can be specified on separate lines. |
| `@copyright` | Yes | Copyright holder. Format: `owner (https://github.com/owner)` |
| `@attribution` | Yes | Fixed string: `Schema structure and descriptions are derived from the source documentation.` |
| `@tag` | No | Category tags. Multiple tags can be specified on separate lines. |
| `@canonical` | No | Location of the original schema definition (e.g., Zod schema in Astro themes). Format: `URL variable.schema` |

### Property JSDoc Tags

| Tag | Description |
|-----|-------------|
| `@default` | Default value for the property |
| `@example` | Example value(s). Multiple examples can be specified on separate lines. |
| `@format` | Value format: `date-time`, `date`, `time`, or `email` |
| `@pattern` | Regex pattern for custom formats |

## Usage

TODO:

## Attribution

All schema definitions in this repository are derived from the
documentation linked in each file's `@source` tag.
Property descriptions are adapted from the original text.

If any copyright holder wishes to have their content removed or
modified, please open an issue.

## License

The schema definitions themselves (type structures and property
descriptions) are attributed to their respective copyright holders
as noted in each file.

Any original code and tooling in this repository is licensed under
the MIT License. See [LICENSE](./LICENSE) for details.
