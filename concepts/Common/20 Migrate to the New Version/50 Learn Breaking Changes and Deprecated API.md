We always do our best to minimize the impact an upgrade has on existing projects. However, it is often necessary to change our tools' UI, API, or behavior to improve them. Take the following into account to ensure that your app works after upgrading:

* **Breaking Changes**      
Refer to the <a href="https://www.devexpress.com/Support/Center/VersionHistory?TechnologyName=DevExtreme&PlatformName=AllPlatforms&ProductName=AllProducts&VersionHistoryItemsType=BreakingChanges&StartBuildName=minor_19_1&EndBuildName=minor_19_2&version-mode=updating-mode" target="_blank">breaking changes introduced in v19.2</a>. Follow the instructions given for each change to mitigate its possible impact.

* **Deprecated API**        
We recommend replacing depreciated APIs with their relevant counterparts because they can break your app once they are removed. Run the upgraded app and open the browser's console. A notification suggesting replacements is displayed if your code uses a deprecated API. Update your code to use the replacements instead of the deprecated API.

You can submit a ticket to our <a href="http://www.devexpress.com/Support/Center/Question/List/1" target="_blank">Support Center</a> if you experience any problems migrating to the new DevExtreme version.
