# Hydrate Buddy Chrome Extension 💧

A simple Chrome extension to remind you to drink water during your working hours. Stay hydrated and productive! 💦

## Features ✨
- Reminds you to drink water during working hours (8:30 AM - 6:00 PM).
- Notifications pop up on your screen to encourage hydration.

## Installation ⚙️

### Steps to load the unpacked extension:
1. Download the extension files to your local machine.
2. Open Chrome browser and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle on the top-right).
4. Click on the **Load unpacked** button.
5. In the dialog box that appears, navigate to the folder where the extension files are located and click **Select Folder**.
6. The extension should now be installed and ready to use.

## Usage 📱

- The extension will automatically remind you to drink water every 45 minutes during the working hours (8:30 AM - 6:00 PM).
- Notifications will pop up on your screen with a message reminding you to hydrate.

## Customization 🔧

You can easily customize the reminder frequency and working hours by editing the `background.js` file.

### How to change the reminder frequency ⏰:
1. Open the `background.js` file.
2. Look for this line of code:
   
   ```js
   chrome.alarms.create("reminder", { 
       periodInMinutes: 45,  // Change this value to adjust the reminder interval
   });
4. Replace `45` with your desired interval (in minutes). For example, change it to 30 for a reminder every 30 minutes.

### How to update the working hours ⏳:
1. In the `background.js` file, find the following code
   
   ```js
   if ((hours >= 8 && minutes >= 30) && (hours < 18))
3. Update `8` and `18` to your desired start and end times. For example, to set the working hours from 9:00 AM to 5:00 PM, change it to:
   
    ```js
   if ((hours >= 9 && minutes >= 0) && (hours < 17))
    
Once you've made your changes, save the file, and refresh the extension in Chrome by going to `chrome://extensions/` and clicking the refresh button.

### Contributions 🤝
Contributions are welcomed! <br>
Feel free to fork the repository, create a branch, and submit a pull request with your improvements. Whether it's fixing a bug, adding a new feature, or improving documentation, your help is appreciated.
