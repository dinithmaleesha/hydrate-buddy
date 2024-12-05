chrome.runtime.onInstalled.addListener(() => {
    const intervel = 1 // Change this value to adjust the reminder interval
    const now = new Date();

    console.log(`Hydrate Buddy installed and running! ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

    
    chrome.alarms.create("reminder", { 
        periodInMinutes: intervel,
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
    const seconds = now.getSeconds();

    if ((hours >= 8 && minutes >= 30) && (hours < 18)) {
        const notificationId = "hydrationReminder";

        chrome.notifications.clear(notificationId, () => {
            chrome.notifications.create(notificationId, {
                type: "basic",
                iconUrl: "icons/icon-128.png",
                title: "Time to Drink Water",
                message: "Hydrate yourself! It's time to drink water.",
                priority: 2,
                requireInteraction: true
            }, () => {
                console.log(`Notification created at ${hours}:${minutes}:${seconds}`);
            });
        });
    }
}

