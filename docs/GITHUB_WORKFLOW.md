# GitHub workflow (main)

## Branch rules for `main`

| Setting | Value |
|--------|--------|
| Require a pull request | On |
| Require status checks | On: `build-and-test`, `secret-scan`, `workflow-security`, `doc-links`, `commit-identities` |
| Require branch to be up to date | On |
| Require approval of the latest push | On |
| Dismiss stale approvals | On |
| Allow force pushes | Off |
| Allow deletion | Off |

[.github/CODEOWNERS](../.github/CODEOWNERS) names the owner; require review from code owners.

## Checks

- **build-and-test**: contributor-check test, Biome, type check, build.
- **secret-scan** (CI and pre-commit): `tools/guard/check-leaks.sh` runs the pinned gitleaks binary with `.gitleaks.toml` (secrets, network identifiers) on staged changes, on every commit of a pull request and on the whole tree.
- **workflow-security**: zizmor audit of `.github`.
- **doc-links**: file links between Markdown files (offline).
- **commit-identities**: every author, committer and co-author must be listed in the organisation variable `ALLOWED_COMMIT_IDENTITIES` (`scripts/check-contributors.mjs`).
- **Scorecard**: weekly OpenSSF Scorecard run.
- **Commit messages** (`commit-msg` hook): no em dash or en dash.

## Local git

`pnpm install` installs the hooks (husky). Do not skip them.
