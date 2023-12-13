

**Q: Do I need an Internet connection for license validation? Is any information transmitted from my machine during license verification?**

A: No, license validation does not require a connection to any DevExpress server, and there is no transfer of any personally identifiable information.

<br>

**Q: Does license verification have an impact on page load time?**

A: No significant impact - the license verification process is faster than 10 ms.

<br>

**Q: Whose responsibility it will be if license key is stolen? What are the consequences?**

A: The license keys are made public due to the client-side nature of JS apps. If somebody steals your key and uses it in their application, it will not affect you in any way. Theft violates our license agreement and entails liability for the illegal key usage. If a license key is stolen and you are aware of the theft, you can contact our license compliance department for assistance. 

<br>

**Q: Can I revoke license keys if an employee quits and I need to invalidate their key?**

A: No, revoking keys is not possible due to the offline nature of the key validation process. Once issued for a DevExtreme version (e.g., 23.2), a key will remain valid indefinitely for all minor updates and security issues.

<br>

**Q: What key should be used on CI/App Server?**

A: You can use any valid license key issued to you or your employees. If you prefer not to tie your build servers to a specific employee key, you can purchase a dedicated license for CI, but it is not obligatory.

<br>

**Q: What products are affected by the license check mechanism?**

A:

- [DevExtreme Angular](https://js.devexpress.com/Angular/)

- [DevExtreme React](https://js.devexpress.com/React/)

- [DevExtreme Vue](https://js.devexpress.com/Vue/)

- [DevExtreme jQuery](https://js.devexpress.com/jQuery/)

And all related supplemental products like Application Templates, UI Template Gallery, and Demos (if you download them or copy to CodePen or CodeSandBox).
At present, license checks are not initiated against ASP.NET Core/MVC.

<br>

**Q: Why are there no license keys available in Download Manager for the upcoming alpha or beta version?**

A: Pre-release versions are not suitable for commercial use. Once the final manufacturing-ready version is released, you can obtain keys through the Download Manager.

<br>

**Q: License keys make the process of deployment management too complicated. Can I opt out?**

A: You cannot opt out of license validation. Only at first glance it seems that the process is complicated. Once you set everything up, there will not be any trouble due to the offline nature of license validation. Once you have deployed your app with a valid license key, you do not need to monitor or take any actions until you decide to update your app to a new major DevExtreme version, which is released twice a year or less frequently.

<br>

**Q: Is it necessary to exclude the `devextreme-license` file from version control? How do you configure version control systems other than Git?**

A: It is not necessary, but we highly recommend using this approach. Storing any keys in version control is generally considered a bad practice. This will help you and your team use individual keys as required by the license agreement and also prevent developers from accidentally committing keys to public repositories.

Configuring the version control system to ignore the file holding license keys may vary:

- Use [.tfignore](https://learn.microsoft.com/en-us/azure/devops/repos/tfvc/add-files-server?view=azure-devops#customize-which-files-version-control-ignores) for Team Foundation Server Version Control (TFVC).

- Use [.gitignore](https://git-scm.com/docs/.gitignore) for Git and other products with version control built on it (like Azure DevOps Server).

- Use [.hgignore](https://wiki.mercurial-scm.org/.hgignore) for Mercurial.