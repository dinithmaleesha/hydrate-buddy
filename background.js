chrome.runtime.onInstalled.addListener(() => {
    console.log("Hydrate Buddy installed and running!");

    
    chrome.alarms.create("reminder", { 
        periodInMinutes: 45,
    });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "reminder") {
        sendNotification();
    }
});

// Send a notification
function sendNotification() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if ((hours >= 8 && minutes >= 30) && (hours < 18)) {
        chrome.notifications.create("hydrationReminder", {
            type: "basic",
            iconUrl: "icons/icon-128.png",
            title: "Time to Drink Water",
            message: "Hydrate yourself! It's time to drink water.",
            priority: 2
        }, () => {
            console.log(`Notification created at ${hours}:${minutes}`);
            setTimeout(() => {
                chrome.notifications.clear("hydrationReminder");
            }, 5000);  // 5 seconds timeout
        });
    }
}
