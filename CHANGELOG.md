# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Prepared for a public repository: leak guard (gitleaks, pre-commit and CI), hashed Content-Security-Policy and security headers, self-hosted wordmark font (`@fontsource/outfit`), no contact email or contact links on the page
- pnpm 11.28.9 (pnpm 12 writes a two-document lockfile that GitHub's dependency graph cannot read) with a 7-day release cooldown, exact dependency versions, `UNLICENSED`; the dependency overrides were removed (none is needed for a security advisory)
- Biome 1.9.4 to 2.6.4, configuration migrated
- Astro 5.18.2 to 7.4.2 (clears all open Astro advisories, including GHSA-26w7-cxv4-gfx2), `@astrojs/react` 7.1.1, `@astrojs/check` 0.9.12
- Node 24 LTS, set only in `.node-version` (CI reads it; `engines.node` is `24.x`)
- `.github/dependabot.yml` (npm and github-actions, weekly, grouped, 7-day cooldown)

## [1.0.0] - 2025-01-27

### Summary

- Initial stable release of phazeo.com landing site
- Hero with gradient beam background
- About (Studio intro), What we build, Featured projects, Philosophy, Domains, Footer sections
- Aceternity UI effects (Spotlight, BackgroundBeams, BackgroundGradient, DomainsBackground)
- Single layout (Git-based versioning; no env-based version switch)
