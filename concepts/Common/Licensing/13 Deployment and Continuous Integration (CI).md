To add DevExtreme license verification to your CI processes, you can use the `add-devextreme-license.js` script described in the previous section. Ensure that you initialize the `DEVEXTREME_KEY` environment variable on the remote machine before the script runs.

The example in this topic uses GitHub Actions and GitHub Secrets. You can adopt a similar approach with any other CI server.

1. Specify GitHub repository-level secret `DevExtremeKey` according to the [GitHub guide](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

2. Use secrets to set a job-level environment variable:

        <!-- tab: yaml -->jobs: 
            publishing: 
                env: 
                    DEVEXTREME_KEY: ${{ secrets.DevExtremeKey }} 

This code assigns the key to a variable. The script mentioned earlier accesses this variable and writes it to `devextreme-license.ts`.
