# AGENTS.md

## Project Overview
Competitive programming practice project. Simple TypeScript setup with no tests, CI, or complex build process.

## Key Commands
- **Run code**: `tsx src/<filename>.ts` – uses tsx to execute TypeScript directly (no compile step)
- **Compile to JS**: `npx tsc` – outputs to `./dist/` (ES2022, NodeNext module)
- **Dependencies**: `@types/node`, `tsx`, `typescript` – already installed

## Directory Structure
- `src/` – TypeScript source (entry: `index.ts`)
- `dist/` – compiled output (gitignored)
- `node_modules/` – dependencies (gitignored)

## TypeScript Config Notes
- `strict: true` – strict type checking enabled
- `target: ES2022`, `module: NodeNext`
- `outDir: ./dist`, `rootDir: ./src`

## Common Gotchas
- No test framework configured (test script is a stub)
- No linter, formatter, or pre-commit hooks
- Competitive programming context: solutions may prioritize speed over maintainability
