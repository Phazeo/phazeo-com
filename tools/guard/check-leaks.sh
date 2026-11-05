#!/usr/bin/env sh
# Leak guard: runs the pinned gitleaks binary (tools/guard/gitleaks.pin) with .gitleaks.toml.
# Never prints secret values (--redact).
#   tools/guard/check-leaks.sh --staged            staged changes (pre-commit)
#   tools/guard/check-leaks.sh --tree              working tree (CI)
#   tools/guard/check-leaks.sh --commits <range>   every commit in a git range (CI, pre-push)
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)
cd "$ROOT"

MODE=tree
RANGE=""
while [ "$#" -gt 0 ]; do
  case "$1" in
    --staged) MODE=staged ;;
    --tree) MODE=tree ;;
    --commits)
      MODE=commits
      RANGE=${2:-}
      if [ -z "$RANGE" ]; then
        echo "check-leaks: --commits requires a git revision range" >&2
        exit 2
      fi
      shift
      ;;
    *)
      echo "check-leaks: unknown argument: $1" >&2
      exit 2
      ;;
  esac
  shift
done

if ! GITLEAKS=$(sh "$ROOT/tools/guard/ensure-gitleaks.sh"); then
  echo "check-leaks: could not install the pinned gitleaks (tools/guard/gitleaks.pin)." >&2
  exit 1
fi

case "$MODE" in
  staged) "$GITLEAKS" git --no-banner --redact -c "$ROOT/.gitleaks.toml" --exit-code 1 --staged "$ROOT" ;;
  tree) "$GITLEAKS" dir --no-banner --redact -c "$ROOT/.gitleaks.toml" --exit-code 1 "$ROOT" ;;
  commits) "$GITLEAKS" git --no-banner --redact -c "$ROOT/.gitleaks.toml" --exit-code 1 --log-opts="$RANGE" "$ROOT" ;;
esac
echo "check-leaks: OK"
