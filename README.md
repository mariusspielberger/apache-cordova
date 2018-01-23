# Mobile development (Apache Cordova)

## Installing node.js

Download and install node.js with the installer provided at [https://nodejs.org/en/download/](https://nodejs.org/en/download/) for the operating system you're currently using. Unfortunately, if you're a windows user, you have to restart your computer.

Use a terminal (command line tool) to execute the following commands:
* node -v
* npm -v
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

Select one platform and start these specified app by running one of the following commands:
* cordova run ios (just possible if you use a Mac OSX)
* cordova run android
* cordova run browser

The easiest way is to use the browser testing because you don't have to install XCode or Android Studio.

For more information, visit the official getting started Apache Cordova website: [https://cordova.apache.org/#getstarted](https://cordova.apache.org/#getstarted).

## Sources (additional information)
* [node.js](https://nodejs.org/en/download/)
* [Install node.js / npm on windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [NPM behind a proxy server](https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386)
* [Apache Cordova](https://cordova.apache.org/)
