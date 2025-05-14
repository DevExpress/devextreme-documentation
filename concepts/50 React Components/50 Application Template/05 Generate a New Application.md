DevExtreme React Application Template can leverage the following two frameworks: Vite or Next.js. Specify the `--app-type` argument to select the framework. If you omit the argument, the command prompts you to make that choice.

    // ===== generate a react app with Vite =====
    npx devextreme-cli new react-app app-name --app-type=vite
    // ===== generate a react app with Next.js =====
    npx devextreme-cli new react-app app-name --app-type=nextjs

[note] For additional information about `devextreme-cli new react-app`, refer to the following help topic: [DevExtreme CLI - Create a New Application](/Documentation/Guide/Common/DevExtreme_CLI/#DevExtreme_Application/Create_a_New_Application).

Execute the following commands to run the application:

    cd app-name
    npm run dev
