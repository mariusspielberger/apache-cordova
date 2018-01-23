# Mobile development (Apache Cordova)

## Apache Cordova overview

Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.

Use Apache Cordova if you are:
* a mobile developer and want to extend an application across more than one platform, without having to re-implement it with each platform's language and tool set.
* a web developer and want to deploy a web app that's packaged for distribution in various app store portals.
* a mobile developer interested in mixing native application components with a WebView (special browser window) that can access device-level APIs, or if you want to develop a plugin interface between native and WebView components.

For more information visit the Apache Cordova [overview page](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#installing-cordova).

## Installing node.js

Download and install node.js with the installer provided at [https://nodejs.org/en/download/](https://nodejs.org/en/download/) for the operating system you're currently using. Unfortunately, if you're a windows user, you have to restart your computer.

Use a terminal (command line tool) to execute the following commands:
* `node -v`
* `npm -v`
In both cases, a version number should be shown.

## Installing Apache Cordova

To install Apache Cordova, open a terminal (command line tool) and type in the command below:
* npm install -g cordova

If you have problems connecting to the download servers, check if you use a proxy server. You can change your proxy setttings by executing the following commands:
* npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
* npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>

## Creating and executing an example project

Open a terminal again or use one that is currently open and type in the following command. Make sure, that you are in a directory where the folder structure of the project should be created.
* cordova create <app-name>

Change the directory to the currently created project structure by typing in the following command.
* cd <app-name>

You also have to add different platforms for which you want to build your app. In this example, there should be three platforms, iOS, Android and Browser. Type in these commands:
* cordova platform add ios (just possible if you use Mac OSX)
* cordova platform add android
* cordova platform add browser

Before you start your app, you can check the pre-requisites for executing apps at a specific platform by typing in the following command:
* cordova requirements

### Running on your own device

Select one platform and start these specified app by running one of the following commands:
* cordova run ios --device (just possible if you use Mac OSX)
* cordova run android --device

If you have problems deploying your app on your iPhone, change the widget id to a name that is compliant with your developer or team signing certificate in the 'config.xml' file. Another option is to open the generated XCode project (*.xcodeproj) an to select 'Automatically manage signing' in the general properties.  

### Running on an emulator or web browser

Select one platform and start these specified app by running one of the following commands:
* cordova emulate ios (just possible if you use Mac OSX)
* cordova emulate android
* cordova emulate browser

The easiest way is to use the browser testing because you don't have to install XCode or Android Studio.

For more information, visit the official getting started Apache Cordova website: [https://cordova.apache.org/#getstarted](https://cordova.apache.org/#getstarted).

## Adding plugins

To add plugins, go to the generated folder in a terminal and execute the commands below. You can search for plugins via command line or this [website](https://cordova.apache.org/plugins/). If you have found a plugin you want to install, just use the second command from below.
* cordova plugin search camera
* cordova plugin add cordova-plugin-camera

You can also view your currently installed plugins with this command:
* cordova plugin ls

## Sources (additional information)
* [node.js](https://nodejs.org/en/download/)
* [Install node.js / npm on windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [NPM behind a proxy server](https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386)
* [Apache Cordova](https://cordova.apache.org/)
* [Apache Cordova: Overview](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#installing-cordova)
* [Apache Cordova: Create your first app](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)
