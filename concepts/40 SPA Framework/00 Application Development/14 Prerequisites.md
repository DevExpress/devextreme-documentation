The DevExtreme SPA framework is based on JavaScript, HTML5 and CSS3. When developing DevExtreme applications, you will only need to use [JavaScript](https://www.w3schools.com/js), [HTML](https://www.w3schools.com/html/html5_intro.asp) and [CSS](https://www.w3schools.com/css). In addition, you will need basic knowledge of [Knockout](https://learn.knockoutjs.com) and [jQuery](https://www.w3schools.com/jquery/default.asp).

Optionally, you can use [TypeScript](https://www.typescriptlang.org) when developing DevExtreme applications. The TypeScript definition files come with the DevExtreme package. Use the [TypeScript-based Application Template](/concepts/50%20VS%20Integration/0%20Project%20Templates/13%20Basic%20Application%20(Type%20Script).md '/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application_Type_Script') to develop DevExtreme applications using TypeScript.

If you currently have the [DevExtreme Mobile](/concepts/Common/07%20DevExtreme%20Packages/10%20DevExtreme%20Mobile.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Mobile') or [DevExtreme Web](/concepts/Common/07%20DevExtreme%20Packages/20%20DevExtreme%20Web.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web') package, but still want to use TypeScript to develop DevExtreme applications, you can download a .ts file with TypeScript definitions from [GitHub](https://github.com/borisyankov/DefinitelyTyped/tree/master/devextreme). Copy this file to your project. In your TypeScript file, add a reference to this file and the .ts files that include TypeScript definitions for the jQuery and Knockout libraries.

    /// <reference path="TypeScript/dx.all.d.ts" />

You need to reference [Globalize](https://github.com/jquery/globalize/releases) only if your application should support the following functionality.

1. Non-English locales
2. Custom message dictionaries
3. Non-USD currency [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')
4. Custom date and number [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')

To learn more about how to use the globalize library refer the [Localization](/Documentation/Guide/UI_Widgets/Common/Localization/#Localization) topic.

You can use **any familiar code editor** (e.g., **Sublime Text**) to develop DevExtreme applications. However, if you have the [DevExtreme Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete') package, you can use Visual Studio. In this instance, project templates, a design-time environment, a device simulator and wizards for easy application packaging are all available to you.
