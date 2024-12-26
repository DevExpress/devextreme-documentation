Vite (pronounced "veet") is a web development framework from the creators of Vue.js. It offers an intuitive API, fast build times, and efficient dependency bundling thanks to its use of native ESM modules.

Unlike its major competitors — Next.js and `create-react-app` — Vite is compatible with a variety of front-end solutions. In addition to its original companion framework — Vue.js — you can use Vite with React.js, Svelte, or even vanilla JavaScript.

In this tutorial, we'll create a new Vite application with a Vue.js frontend. The application will pull data from the publicly available [Cat Facts API](https://catfact.ninja) and display it with the DevExpress DataGrid.

## 1. Create a new Vite project

Use the following command to launch the Vite project wizard:

    npm create vite@latest

![Vite CLI wizard](/images/Vite/create-vite.png)

Answer the wizard's prompts to select your project name, your front-end framework, and your programming language (JavaScript or TypeScript).

The Vite wizard does not install project dependencies automatically. Enter your project directory and run `npm install`:

    cd vite-project; npm install

To start the development server, execute the following command:

    npm run dev

![Vite server up and running](/images/Vite/vite-ready.png)

## 2. Configure DevExtreme dependencies

Add the following dependencies to the `package.json` file:

    <!--tab: package.json-->
    "dependencies": {
        "devextreme": "^25.1",
        "devextreme-vue": "^25.1",
        ...
    }

Install the new dependencies:

    npm install

## 3. Remove unnecessary code

1. Open the `srtc/App.vue` file, and replace its content with the following two tags:

        <!--tab: App.vue-->        
        <template>
        </template>

        <script setup lang="ts">
        </script>

2. Remove the `src/components/HelloWorld.vue` file because we no longer need it.

3. The `src/style.css` file includes CSS code that overrides DevExtreme styles. Open the file and remove its contents.

## 4. Set up a DevExtreme theme

1. Add the following `import` statement to the `src/main.ts` file:

        <!--tab: main.ts-->
        import 'devextreme/dist/css/dx.fluent.blue.light.css';

    This statement applies the `fluent` theme to your application. You can select a [different DevExtreme theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') if you wish.

2. To apply this theme throughout your application, edit the `index.html` file in the project's root directory. Add the `dx-viewport` class to the `body` tag:

        <!--tab: index.html-->
        <body class="dx-viewport">

## 5. Add a new component

1. Create a new file for the component --- `src/components/CatFactGrid.vue`. Populate it with the following two tags:

        <!--tab: CatFactGrid.vue-->
        <template>
            // component declaration
        </template>

        <script setup lang="ts">
            // component setup
        </script>

2. Modify the `src/App.vue` file to display our new component:

        <!--tab: App.vue-->
        <template>
            <CatFactGrid />
        </template>

        <script setup lang="ts">
            import CatFactGrid from './components/CatFactGrid.vue'
        </script>

## 6. Configure the DataGrid

Go back to the `CatFactGrid.vue` file. The component is currently empty. Use the `script` tag to set up a DevExtreme DataGrid:

    <!--tab: CatFactGrid.vue-->
    <script setup lang="ts">
        import { DxDataGrid } from "devextreme-vue/data-grid"; // Import the DevExtreme DataGrid component
        import CustomStore from "devextreme/data/custom_store"; // Import the CustomStore object

        const catFactStore = new CustomStore({ // Define a CustomStore that pulls data from the Cat Facts API
            load: () => {
                return fetch("https://catfact.ninja/facts")
                .then(handleErrors)
                .then((response) => response.json())
                .catch(() => {
                    throw "Network error";
                });
            },
        });

        function handleErrors(response: Response) { // Handle network request failure
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
    </script>

Use the `template` tag to initialize the component, and attach it to the aforementioned `CustomStore`:

    <!--tab: CatFactGrid.vue-->
    <template>
        <DxDataGrid
            id="data-grid"
            :data-source="catFactStore" // Load the CustomStore from the script
            :row-alternation-enabled="true" // Apply a gray background to even rows for greater visibility 
            :show-column-lines="true" // Display column borders
        >
        </DxDataGrid>
    </template>

## 7. View the results

You do not need to relaunch the development server to apply these changes. Just refresh the page and see the grid in action:

![Fully configured DevExtreme DataGrid](/images/Vite/vite-final-result.png)

## 8. Next Steps

DevExtreme components are powerful, easy to use, and fully compatible with Vite. View our [application templates](https://js.devexpress.com/Vue/Templates/) and [demos](https://js.devexpress.com/Demos/WidgetsGallery/) to discover the full capabilities of DevExtreme components.

Read the [Vite.js documentation](https://vitejs.dev/guide/) for more information on the Vite framework.

[tags] vue
