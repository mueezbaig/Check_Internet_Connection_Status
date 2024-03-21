let popup = document.getElementById("popup");
let popupIcon = document.getElementById("popupIcon");
let popupMessage = document.getElementById("popupMessage");

let showMessagePopup = (text, online) => {
    popupMessage.textContent = text;
    if (online) {
        popup.style.backgroundColor = "#e7f6d5"; // Set background color for online status
        popup.style.color = "#689f38"; // Set text color for online status
        popupIcon.className = "uil uil-wifi"; // Set icon class for online status
    } else {
        popup.style.backgroundColor = "#ffdde0"; // Set background color for offline status
        popup.style.color = "#d32f2f"; // Set text color for offline status
        popupIcon.className = "uil uil-times"; // Set icon class for offline status
    }
    popup.style.left = "calc(50% - 125px)"; // Center horizontally
};

let hideMessagePopup = () => {
    popup.style.left = "-300px"; // Hide popup
};

if (window.navigator.onLine) {
    showMessagePopup("Internet Connection Available", true);
} else {
    showMessagePopup("No Internet Connection", false);
}

window.addEventListener("online", () => {
    showMessagePopup("Internet Connection Available", true);
});

window.addEventListener("offline", () => {
    showMessagePopup("No Internet Connection", false);
});

popup.addEventListener("click", hideMessagePopup); // Hide popup when clicked
