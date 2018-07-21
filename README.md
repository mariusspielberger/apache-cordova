# Mobile development (Apache Cordova)

## Apache Cordova overview

Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.

Use Apache Cordova if you are:
* a mobile developer and want to extend an application across more than one platform, without having to re-implement it with each platform's language and tool set.
* a web developer and want to deploy a web app that's packaged for distribution in various app store portals.
* a mobile developer interested in mixing native application components with a WebView (special browser window) that can access device-level APIs, or if you want to develop a plugin interface between native and WebView components.

For more information visit the Apache Cordova [overview page](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#installing-cordova).

## Installing node.js

Download and install node.js with the installer provided at the [website](https://nodejs.org/en/download/) for the operating system you're currently using. Unfortunately, if you're a windows user, you have to restart your computer.

Use a terminal (command line tool) to execute the following commands:
* `node -v`
* `npm -v`   

In both cases, a version number should be shown.

## Installing Apache Cordova

To install Apache Cordova, open a terminal (command line tool) and type in the command below:
* `npm install -g cordova`

If you have problems connecting to the download servers, check if you use a proxy server. You can change your proxy setttings by executing the following commands:
* `npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>`
* `npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>`

## Creating and executing an example project

Open a terminal again or use one that is currently open and type in the following command. Make sure, that you are in a directory where the folder structure of the project should be created.
* `cordova create <app-name>`

Change the directory to the currently created project structure by typing in the following command.
* `cd <app-name>`

You also have to add different platforms for which you want to build your app. In this example, there should be three platforms, iOS, Android and Browser. Type in these commands:
* `cordova platform add ios` (just possible if you use Mac OSX)
* `cordova platform add android`
* `cordova platform add browser`

Before you start your app, you can check the pre-requisites for executing apps at a specific platform by typing in the following command:
* `cordova requirements`

### Running on your own device

Select one platform and start these specified app by running one of the following commands:
* `cordova run ios --device` (just possible if you use Mac OSX)
* `cordova run android --device`

If you have problems deploying your app on your iPhone, change the widget id to a name that is compliant with your developer or team signing certificate in the `config.xml` file. Another option is to open the generated XCode project (*.xcodeproj) an to select `Automatically manage signing` in the general properties.  

### Running on an emulator or web browser

Select one platform and start these specified app by running one of the following commands:
* `cordova emulate ios` (just possible if you use Mac OSX)
* `cordova emulate android`
* `cordova emulate browser`

The easiest way is to use the browser testing because you don't have to install XCode or Android Studio.

For more information, visit the official getting started Apache Cordova website: [https://cordova.apache.org/#getstarted](https://cordova.apache.org/#getstarted).

## Adding plugins

To add plugins, go to the generated folder in a terminal and execute the commands below. You can search for plugins via command line or this [website](https://cordova.apache.org/plugins/). If you have found a plugin you want to install, just use the second command from below.
* `cordova plugin search camera`
* `cordova plugin add cordova-plugin-camera`

You can also view your currently installed plugins with this command:
* `cordova plugin ls`

## config.xml

Is a global configuration file that controls many aspects of a cordova application's behavior. This platform-agnostic XML file is arranged based on the W3C's Packaged Web Apps (Widgets) specification, and extended to specify core Cordova API features, plugins, and platform-specific settings. It's located at `app/config.xml`.

This is a default config.xml file:

```
<?xml version='1.0' encoding='utf-8'?>
<widget id="io.cordova.hellocordova" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
  <name>HelloCordova</name>
  <description>
      A sample Apache Cordova application that responds to the deviceready event.
  </description>
  <author email="dev@cordova.apache.org" href="http://cordova.io">
      Apache Cordova Team
  </author>
  <content src="index.html" />
  <plugin name="cordova-plugin-whitelist" spec="1" />
  <access origin="*" />
  <allow-intent href="http://*/*" />
  <allow-intent href="https://*/*" />
  <allow-intent href="tel:*" />
  <allow-intent href="sms:*" />
  <allow-intent href="mailto:*" />
  <allow-intent href="geo:*" />
  <platform name="android">
      <allow-intent href="market:*" />
  </platform>
  <platform name="ios">
      <allow-intent href="itms:*" />
      <allow-intent href="itms-apps:*" />
  </platform>
</widget>
```

Here are some explanations of the most important tags.

The `widget` element is the root element of the document. It should consist of an id which specifies the app's reverse-domain identifier (should be unique) and a version (major / minor / patch).

The `name` tag specifies the app's formal name, as it appears on the device's home screen and within app-store interfaces.

The `description` tag specifies a string that appears withing app-store listings.

The `author` tag specifies contact information that may appear within app-store listings.

The `content` tag specifies the app's starting page in the top-level directory (default: index.html).

The `plugin` tag specifies details about what plugin to restore during a prepare. If you add a plugin via command line and use `--save`, then an entry is automatically inserted in the config.xml file.

The `access` tag defines the set of external domains the app is allowed to communicate with. You can use wildcards.

The `allow-intent` tag controls which URLs the app is allowed to ask the system to open. By default, no external URLs are allowed.

The `allow-navigation` tag controls which URLs the web view itself can be navigated to. Applies to top-level navigations only.

The `platform` tag is used to specify preferences or other elements specific to a particular platform.

You can find the complete documentation [here](https://cordova.apache.org/docs/en/latest/config_ref/index.html).

## IDEs

A text editor like vi on unix systems or [Atom](https://atom.io/) for all important operating systems could be used.

It's easier to use a so called integrated development environment (IDE) to run the app on a specific device by just clicking the start button.

You can use [WebStorm](https://www.jetbrains.com/webstorm/) with a student license or [Microsoft Visual Studio Code](https://code.visualstudio.com/) that is open source.

Depending on your IDE, maybe some additional configuration and package installations are needed. It's not described in detail here, because it depends on the chosen version.

## Important ionic commands

You can use the following commands to get debugging information in case of errors and it's also possible to automatically re-deploy the app on an emoulator:

```ionic cordova run android --device -lc```   

## Example projects of this repository

There are 4 different example projects.

* ```cordova-hello-world``` is the example project that is automatically created while using Cordova whith the command ```cordova create <app-name>```. It can be used from every person that wants to build a plain Cordova app.
* ```cordova-phone-call``` is an example for adding a plugin to Cordova. Here, the phone-call-plugin is used to show how simple it is to call a person from your app while clicking a button.
* ```ionic-google-maps-plugin``` contains an example code for using Ionic to create the UIs easily. In this example, the well-known Google Maps map is shown with the static position of the DBHW Mannheim. It's an example how to use plugins in the Ionic environment. You can find detailed information [here](https://github.com/mapsplugin/cordova-plugin-googlemaps).
* ```ionic-hello-world``` is one example project that is generated while using Ionic. It can be used from every person that wants to build an Ionic app.

## Sources (additional information)
* [node.js](https://nodejs.org/en/download/)
* [Install node.js / npm on windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [NPM behind a proxy server](https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386)
* [Apache Cordova](https://cordova.apache.org/)
* [Apache Cordova: Overview](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#installing-cordova)
* [Apache Cordova: Create your first app](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)
* [Apache Cordova: config.xml](https://cordova.apache.org/docs/en/latest/config_ref/index.html)
* [WebStorm](https://www.jetbrains.com/webstorm/)
* [Microsoft Visual Studio Code](https://code.visualstudio.com/)
