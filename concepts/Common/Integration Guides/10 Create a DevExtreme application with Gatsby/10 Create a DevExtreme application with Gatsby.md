Gatsby is a prominent member of the latest wave of static website generators. It is an opinionated library with a deep pool of capabilities that include optional server-side rendering and GraphQL support.

DevExtreme's powerful client-side components complement Gatsby well, which makes this combo appealing for web developers. This article explains how to use the two products together.

## 1. Create an empty Gatsby website

Install the `gatsby-cli` npm package. This command line tool generates, builds, and deploys Gatsby websites.

    npm install -g gatsby-cli

Launch the Gatsby wizard to generate a new website:

    gatsby new

Launch the development server to see a live preview of the website:

    cd my-website
    gatsby develop

![Command line URL](/images/Gatsby/cmd-url.png)

The framework outputs the URL to the command line. Click the link to open it in the browser:

![Gatsby website](/images/Gatsby/new-website.png)

Consult [Gatsby documentation](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/#create-a-gatsby-site) for an in-depth walkthrough of the process.

## 2. Add Static Content

Gatsby uses React to render content. Edit the `src/pages/index.tsx` file to change the home page:

    <!--tab: index.tsx -->
    import * as React from "react";
    import type { HeadFC, PageProps } from "gatsby";

    const IndexPage: React.FC<PageProps> = () => {
      return (<main>
        <h1>Main Page</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>)
    }
    export default IndexPage
    export const Head: HeadFC = () => {
      return (
          <>
              <title>Home Page</title>
          </>
      )
    };

Save your changes. Your page should look like this:

![Static content](/images/Gatsby/lipsum-page.png)

## 3. (Optional) Use Server-Side Rendering with Netlify

Gatsby has a tight integration with Netlify — a cloud platform for web applications. Platforms like Netlify allow you to render Gatsby pages on the server.

You can connect a GitHub repository with a Gatsby website to your Netlify account. Netlify will deploy the website, and update it every time you push changes to your repository.

1. Create a new GitHub repository.
2. Push the contents of your local Gatsby repo to GitHub.
3. Sign up for Netlify (you can use your GitHub account).
4. Import your GitHub repository from Netlify and deploy your website (see [this tutorial](https://docs.netlify.com/welcome/add-new-site/)).

Let's conduct a little experiment to check whether server-side rendering works. Disable JavaScript in your browser and reload the page.

If you run a development server, Gatsby renders its content on the client. When you disable JavaScript, the page goes blank:

![The development server displays a blank page when you disable JavaScript](/images/Gatsby/blank-page.png)

If you deploy your website on Netlify, Gatsby renders your content on the server, and you can see the content:

![Gatsby renders content on the server](/images/Gatsby/ssr-example.png)

## 4. Add DevExtreme to the application

We're ready to add a [DevExtreme DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/') to our application. First, add DevExtreme to your project dependencies:

    <!--tab: package.json-->
    "dependencies": {
        "devextreme": "^23.1.3",
        "devextreme-react": "^23.1.3", 
        "gatsby-plugin-manifest": "^5.11.0",
        <...>
    }

Run `npm install` to install new dependencies. When the installation is complete, add a DataGrid component to the index page:

    <!--tab: index.tsx -->
    import * as React from "react";
    import type { HeadFC, PageProps } from "gatsby";
    import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
    import ODataStore from 'devextreme/data/odata/store';

    const pageSizes = [10, 25, 50, 100];

    const dataSourceOptions = {
      store: new ODataStore({
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        version: 2,
        beforeSend(request) {
          const year = new Date().getFullYear() - 1; 
          request.params.startDate = `${year}-05-10`; 
          request.params.endDate = `${year}-5-15`;
        },
      }),
    };

    const DemoGrid: React.FC = () => {
      return (<> 
          <DataGrid
              dataSource={dataSourceOptions}
              allowColumnReordering={true}
              rowAlternationEnabled={true}
              showBorders={true}
          >
              <Column 
                  dataField="Product" />
              <Column
                  dataField="Amount"
                  caption="Sale Amount"
                  dataType="number"
                  format="currency"
                  alignment="right"
              />
              <Column
                  dataField="Discount"
                  caption="Discount %"
                  dataType="number"
                  format="percent"
                  alignment="right"
                  allowGrouping={false}
                  cssClass="bullet"
              />
              <Column dataField="SaleDate"
                  dataType="date" 
              />
              <Column dataField="Region"
                  dataType="string" 
              />
              <Column dataField="Sector"
                  dataType="string" 
              />
              <Column dataField="Channel"
                  dataType="string" 
              />
              <Column dataField="Customer"
                  dataType="string" 
                  width={150} 
              />
              <Pager 
                  allowedPageSizes={pageSizes}
                  showPageSizeSelector={true} 
              />
              <Paging defaultPageSize={10} />
          </DataGrid> 
        </>
      );
    }
    const IndexPage: React.FC<PageProps> = () => {
        return (
            <main>
                <h1>Main Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <DemoGrid />
            </main>
        )
    }
    export default IndexPage
    export const Head: HeadFC = () => {
        return (
            <>
                <title>Home Page</title>
            </>
        )
    };

Refresh the page to view the result:

![A DevExtreme grid without a theme](/images/Gatsby/grid-without-a-theme.png)

[note] DevExtreme components are *always* rendered on the cilent. If you disable JavaScript and refresh your Netlify deployment, you won't see the DevExtreme grid.

## 5. Apply a DevExtreme theme

The application displays a DevExtreme grid, but does not style it appropriately. If you want the grid to look good, style it with a [DevExtreme theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/').

You can apply a DevExtreme theme to the grid in one of two ways:

* Apply a DevExtreme theme to the entire application. This approach works best when your website includes DevExtreme components on most pages. Otherwise, it may unnecessarily increase the load time of your application.
* Apply a DevExtreme theme on a per-page basis. This approach works best if only a few pages of your website include DevExtreme components.

### Apply a theme to the entire website

If you want to apply a single DevExtreme theme to your entire website, add a file named `gatsby-browser.js` to the root folder of your project.

Add the following `import` statement to the file:

    <!--tab: gatsby-browser.js-->
    import 'devextreme/dist/css/dx.light.css';

This statement applies the `light` theme to the DevExtreme grid.

Restart the Gatsby server to compile new assets. The grid should look like this:

![A DevExtreme grid with a theme](/images/Gatsby/grid-with-a-theme.png)

### Apply the theme to a specific page

If you want to apply a DevExtreme theme to a specific page, do not import this theme globally. Instead, add a `link` to the `Head` of the target page:

    export const Head: HeadFC = () => 
    {
        return (
            <>
              <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/23.1.3/css/dx.light.css" />
              <title>Home Page</title>
            </>
        )
    };

This link downloads the `light` theme from the [DevExpress CDN](/concepts/Common/Distribution%20Channels/05%20CDN '/Documentation/Guide/Common/Distribution_Channels/CDN/') and applies it to the page. If you need to insert this code into multiple pages, save it as a separate component.

Modify the name of the stylesheet to apply [a different theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/'). Modify the name of the subfolder (`23.1.3`) to apply a theme that is compatible with a different version of DevExtreme.

## 6. Next Steps

DevExtreme components are powerful, easy to use, and fully compatible with Gatsby. View our [application templates](https://js.devexpress.com/React/Templates/) and [demos](https://js.devexpress.com/Demos/WidgetsGallery/) to discover the full capabilities of DevExtreme components.

Read the [Gatsby documentation](https://www.gatsbyjs.com/docs) for more information the Gatsby framework.

[tags] react