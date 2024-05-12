# Ingest Microsoft 365 and Power Platform community samples using JavaScript and Node.js

## Summary

This sample contains a Microsoft Graph connector that shows how to ingest sample solutions from the [Microsoft 365 and Power Platform community sample gallery](https://adoption.microsoft.com/sample-solution-gallery/?keyword=&sort-by=creationDateTime-true&page=1). It gives you a very convenient way to search for and reference community samples right from your tenant!

![Microsoft 365 and Power Platform community rate limit samples displayed in Microsoft Search](assets/sample-rich.png)

## Contributors

- [Waldek Mastykarz](https://github.com/waldekmastykarz)
- [João Mendes](https://github.com/joaojmendes)

## Version history

Version|Date|Comments
-------|----|--------
1.8|March 12, 2024|Fixed schema
1.7|February 19, 2024|Updated local cache of samples. Updated dependencies
1.6|November 7, 2023|Fixed bug in loading content
1.5|October 27, 2023|Added PowerShell setup script
1.4|October 24, 2023|Added link to the title
1.3|October 12, 2023|Added rich result layout
1.2|October 9, 2023|Added configuring result layout
1.1|October 6, 2023|Updated local cache of samples
1.0|October 2, 2023|Initial release

## Prerequisites

- [Microsoft 365 Developer tenant](https://developer.microsoft.com/microsoft-365/dev-program)
- [Node@20](https://nodejs.org)
- Bash

## Minimal path to awesome

- Clone this repository (or [download this solution as a .ZIP file](https://pnp.github.io/download-partial/?url=https://github.com/pnp/graph-connectors-samples/tree/main/samples/nodejs-javascript-solutiongallery) then unzip it)
- Make the setup script executable, by running `chmod +x ./setup.sh`
- Run the setup script: on macOS: `./setup.sh`, on Windows `.\setup.ps1`. When finished, it will create a local `env.js` file with information about the AAD app, required to run the code
- Restore dependencies: `npm install`
- Create the external connection: `npm run createConnection` (this will take several minutes)
- Ingest the content: `npm run loadContent`

By default, the script will use the rich adaptive card to visualize the results. You can manually switch it to a compact view by configuring the result template in the Microsoft 365 Admin Center Search configuration, using the contents of the `resultLayout-compact.json`.

## Features

This sample shows how to ingest samples from the Microsoft 365 and Power Platform community Sample Solution Gallery into your Microsoft 365 tenant.

The sample illustrates the following concepts:

- script creating the Entra ID (Azure AD) application using CLI for Microsoft 365
- create external connection including URL to item resolver to track activity when users share external links
- create external connection schema
- retrieve data from a remote API and store it in a local cache for future use
- support incremental ingestion by tracking the last modified date of the newest sample
- ingesting items with up to 10 parallel connections to speed up the ingestion
- logging errors for easy debugging
- visualize the external content in search results using a custom Adaptive Card
- extend Microsoft Graph JavaScript SDK with a [middleware to wait for a long-running operation to complete](https://blog.mastykarz.nl/easily-handle-long-running-operations-middleware-microsoft-graph-javascript-sdk/)
- extend Microsoft Graph JavaScript SDK with a [debug middleware](https://blog.mastykarz.nl/easily-debug-microsoft-graph-javascript-sdk-requests/) to show information about outgoing requests and incoming responses

## Help

We do not support samples, but this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

You can try looking at [issues related to this sample](https://github.com/pnp/graph-connectors-samples/issues?q=label%3A%22sample%3A%nodejs-javascript-solutiongallery%22) to see if anybody else is having the same issues.

If you encounter any issues using this sample, [create a new issue](https://github.com/pnp/graph-connectors-samples/issues/new).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/graph-connectors-samples/issues/new).

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

![](https://m365-visitor-stats.azurewebsites.net/SamplesGallery/pnp-graph-connector-nodejs-javascript-solutiongallery)
