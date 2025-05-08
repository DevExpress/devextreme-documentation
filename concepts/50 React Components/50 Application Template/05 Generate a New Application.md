You can create a new DevExtreme React Application Template using Vite or Next.js. Specify the `devextreme-cli new` command's `--app-type` argument to make a selection. If you leave the argument unspecified, the command will prompt you to choose an app type.

    // ===== generate a react app with Vite =====
    npx devextreme-cli new react-app app-name --app-type=vite
    // ===== generate a react app with Next.js =====
    npx devextreme-cli new react-app app-name --app-type=nextjs

[note] For more information on the `devextreme-cli new react-app` command, see the [DevExtreme CLI - Create a New Application](/Documentation/Guide/Common/DevExtreme_CLI/#DevExtreme_Application/Create_a_New_Application) topic.

Execute the following commands to run the generated application:

    cd app-name
    npm run dev
