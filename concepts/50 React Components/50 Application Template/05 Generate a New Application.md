DevExtreme React Application Template can leverage the following two frameworks: Vite or Next.js. To select the framework, specify the `--app-type` argument. If you omit the argument, the command prompts you to choose.

    // ===== generate a react app with Vite =====
    npx devextreme-cli new react-app app-name --app-type=vite
    // ===== generate a react app with Next.js =====
    npx devextreme-cli new react-app app-name --app-type=nextjs

[note] For more information about `devextreme-cli new react-app`, refer to the following help topic: [DevExtreme CLI - Create a New Application](/concepts/Common/DevExtreme%20CLI/20%20DevExtreme%20Application/10%20Create%20a%20New%20Application.md '/Documentation/Guide/Common/DevExtreme_CLI/#DevExtreme_Application/Create_a_New_Application').

Execute the following commands to run the application:

    cd app-name
    npm run dev
