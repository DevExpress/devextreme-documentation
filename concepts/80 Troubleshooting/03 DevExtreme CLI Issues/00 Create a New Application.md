To resolve issues when you [create a new application with DevExtreme CLI](/Documentation/Guide/Common/DevExtreme_CLI/#DevExtreme_Application/Create_a_New_Application), perform the following troubleshooting steps.

[important] To ensure commands are executed correctly, run them with administrator privileges.

## Check Node.js and NPM Versions

Ensure the latest Node.js and NPM are installed on your machine.

To check your Node.js version, run the following command in terminal:

    node -v

To update Node.js, follow the [Node.js download instructions](https://nodejs.org/en/download).

Run the following commands to check and update your NPM version:

    npm -v
    npm i -g npm@latest

## Check DevExtreme CLI version

To check and update the [DevExtreme CLI](Documentation/Guide/Common/DevExtreme_CLI/) version installed on your machine, run the following commands:

    npm list -g devextreme-cli
    npm i -g devextreme-cli@latest

## Clear NPM Cache

If the previous steps do not resolve your issue, run the following command to clear the NPM cache:

    npm cache clean --force

If the issue persists, create a ticket in the [DevExpress Support Center](https://supportcenter.devexpress.com/). Include the following information in your ticket:

- Node.js and NPM versions.
- NPM log file (found in `C:\Users\your_username\AppData\Local\npm-cache\_logs`).
- Commands you executed.
