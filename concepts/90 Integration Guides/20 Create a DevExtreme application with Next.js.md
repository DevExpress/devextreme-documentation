# Create a DevExtreme application with Next.js

Next.js is a React-based web development framework. It can generate static websites or, with just a little extra configuration, serve dynamic content. The creators of React endorse Next.js for its ease of use, rich capabilities, and compatibility with modern trends, such as server-side page rendering.

This article explains how to create a simple Next.js application, and populate it with DevExtreme components.

- [1. Create a new project](#1-create-a-new-project)
- [2. Add static content to the front page](#2-add-static-content-to-the-front-page)
  - [Clean-up](#clean-up)
  - [View the server-rendered page](#view-the-server-rendered-page)
- [3. Add a DevExtreme Data Grid](#3-add-a-devextreme-data-grid)
  - [Install the dependencies](#install-the-dependencies)
  - [Set up the necessary imports](#set-up-the-necessary-imports)
  - [Set up a Data Source](#set-up-a-data-source)
  - [Configure the Data Grid](#configure-the-data-grid)
  - [Insert the Data Grid component into the page](#insert-the-data-grid-component-into-the-page)
  - [View the client-side rendered grid](#view-the-client-side-rendered-grid)
- [4. Next Steps](4-next-steps)

## 1. Create a new project

> Read the [official Next.js documentation](https://nextjs.org/docs/getting-started/installation) for an in-depth overview of the installation process.

The `create-next-app` wizard allows you to bootstrap a Next.js web app in a matter of minutes.

![create-next-app](/images/NextJS/create-next-app.png)

The wizard creates a folder for the project, installs the necessary dependencies, and populates the project with sample code.

Run the following command to launch the wizard:

<!--Shell-->
    npx create-next-app@latest

Answer the wizard's prompts to configure your new app. For the purposes of this tutorial, we enabled the following options:

* TypeScript support
* ESLint support
* Store source code in the `src/` directory
* Use the Next.js App Router

After the wizard completes its job, you can start the development server:

<!--Shell-->
    npm run dev

If you want to run your website in **production mode**, build the project first:

<!--Shell-->
    npm run build; npm run start

The server outputs the preview URL to the console. The default URL is `http://localhost:3000`. Open the URL in the browser to view the page.

![Original front page](/images/NextJS/original-front-page.png)

Proceed to the next step when you get the server up and running.

## 2. Add static content to the front page

Next.js stores the source code for your application's front page in the `src/app/page.tsx` file.

Let's replace the content of the page with a simple heading and a paragraph:

<!--TypeScript-->
    export default function Home() {
        return (
            <main>
                <h1>Main Page</h1>             
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </main>
        )
    }

### Clean-up

The `page.tsx` file no longer references the `page.module.css` file. Delete the CSS file from disk.

The `globals.css` file contains global styles, including the setting that configures the default background color. It is **unsafe** to remove this file. Delete the following CSS code to make the background plain:

<!--CSS-->
    body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
    }

### View the server-rendered page

The page should look like this:

![Modified page](/images/NextJS/modified-page.png)

Next.js rendered this content on the server. This means that you can view it in a browser that prohibits the execution of client-side JavaScript. Try it yourself --- go to your browser settings, disable JavaScript, and refresh the page. 

![Disable JavaScript](/images/NextJS/disable-javascript.png)

The page should not change.

![Modified page](/images/NextJS/ssr-example.png)

Turn JavaScript back on to continue the tutorial.

## 3. Add a DevExtreme Data Grid

### Install the dependencies

Update your `package.json` file to include the dependencies necessary to use DevExtreme components:

<!--JSON-->
    "dependencies": {
        "devextreme": "^23.2",
        "devextreme-react": "^23.2",
        ...
    }
Run `npm install` to install these packages.

### Set up the necessary imports

Open the `page.tsx` file. Add the following `import` statements at the beginning:

<!--TypeScript-->
    import DataGrid from 'devextreme-react/data-grid';
    import 'devextreme/dist/css/dx.light.css';

The first `import` allows you to use the Data Grid component. The second applies the default "Light" theme to DevExtreme components.

### Set up a Data Source

The Data Grid component requires a data source. For the purpose of this tutorial, we'll use data from the publicly available [Cat Facts API](https://catfact.ninja). Add the following asynchronous code to the `page.tsx` file:

<!--TypeScript-->
    const getCatFacts = async (): Promise<any[]> => {
        const dataResponse = await fetch("https://catfact.ninja/facts", {
        cache: "no-store", });
        const facts = (await dataResponse.json()).data;
        return facts; 
    };

    const dataItemsPromise = getCatFacts();

### Configure the Data Grid

Create a new React component with the name `DemoGrid`. Use this component to define and configure a new instance of the DevExtreme Data Grid:

<!--TypeScript-->
    const DemoGrid: React.FC = async () => {
        const dataItems = await dataItemsPromise; // Load the data from the Cat Facts API
        return ( 
            <>
                <DataGrid
                    dataSource={dataItems} // Assign the data source
                    rowAlternationEnabled={true} // Use the grey background to highlight even grid rows and improve the readability
                    showBorders={true} // Display grid borders
                > 
                </DataGrid>
            </>
        ); 
    }

### Insert the Data Grid component into the page

Modify the Home function io include the `DemoGrid` component we created in the previous step:

<!--TypeScript-->
    export default function Home() {
        return (
            <main>
                <h1>Main Page</h1>             
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            <DemoGrid/>
            </main>
        )
    }

### View the client-side rendered grid

If your server runs in development mode, refresh the browser window. If your server runs in production mode, build the application, and restart the server:

<!--Shell-->
    npm run build; npm run start

The page should display an interactive grid with data from the Cat Facts API.

![Client-side grid](/images/NextJS/client-side-grid.png)

DevExtreme renders the Data Grid on the client, even if the rest of the page is rendered server-side. If you disable JavaScript again, you'll see an empty `div` element in place of the grid:

![Empty div in place of the grid](/images/NextJS/empty-div.png)

## 4. Next Steps

DevExtreme components are powerful, easy to use, and fully compatible with Next.js. View our [application templates](https://js.devexpress.com/React/Templates/) and [demos](https://js.devexpress.com/React/Demos/WidgetsGallery/) to discover the full capabilities of DevExtreme components.

Read the [Next.js documentation](https://nextjs.org/docs) for more information the Next.js framework.