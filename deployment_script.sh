if [[ "$VERCEL_GIT_COMMIT_REF" == "master" || "$VERCEL_GIT_PULL_REQUEST" != "false" ]]; then
  echo "Proceeding with build for PR $VERCEL_GIT_COMMIT_REF ✨"
  exit 1
else
  echo "Ignoring build for branch $VERCEL_GIT_COMMIT_REF 😴"
  exit 0
fi
