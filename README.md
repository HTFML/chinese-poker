# Chinese Poker: Big Two

&nbsp;

# Getting Set Up
  ### Prerequisites
  If you don't want to run the simulator on Expo CLI, be sure to have XCode installed. In "Preferences > Components", you can download the specific iOS simulators you would like to run (I recommend the most recent one).
  - [Setting up Development Environment](https://reactnative.dev/docs/environment-setup)
  
  ### Instructions
  Feel free to correct me if I am wrong, Alex. Not sure how we feel about package managers, but npm and yarn are available.
  - Clone the Master branch
  - Run `cd app-container` in the terminal to get to the application's directory
  - Run `npm install` in the terminal to make sure all dependancies are installed
  - Run `yarn ios` to start and launch the Expo CLI on your browser and subsequently on the iOS simulator (if you don't have Expo CLI installed, this command should install Expo for you and then launch the application).
    - If you have Expo installed on your phone, you should be able to run the application on your phone through the Expo app using the QR code.
    - Later, I might write a seperate script to launch the application through XCode, instead of Expo, if for whatever reason someone prefers to not use Expo. As far as I know, they are essentially the same.
  - Changes will be reflected after you save on your text-editor and hitting `CMD + R` when on the simulator, initiating a refresh.
  - To close/end the Expo server, simply run `CMD + C` on the terminal that is running the Expo package.
  
  ### Notes
  Most of the work done will be in the `src` directory. Some files will be outside of that directory, mainly `App.js`, `index.js`, and other files that I plan on using as a modular component (like putting all the navigation routes in one file: `Navigation.js`).
