import { createIcons, Clock, CookingPot } from 'lucide';

async function initializeWakeLock() {
    if ("wakeLock" in navigator) {
        const wakeLock = document.getElementById("wakeLock");
        if (!wakeLock) {
            throw new Error("wakeLock element not found");
        }
        
        const label = document.createElement("label");
        label.classList.add("label", "cursor-pointer", "gap-2");
        wakeLock.appendChild(label);
    
        const labelText = document.createElement("span");
        labelText.classList.add("label-text");
        labelText.textContent = "Prevent your screen from going dark";
        label.appendChild(labelText);
    
        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("toggle");
        label.appendChild(input);
    
        input.addEventListener("change", async () => {
            if (input.checked) {
                try {
                    const wakeLock = await navigator.wakeLock.request("screen");
                    console.log("Wake lock activated");
                    wakeLock.addEventListener("release", () => {
                        console.log("Wake lock released");
                    });
                } catch (error) {
                    console.error("Wake lock request failed", error);
                }
            } else {
                console.log("Wake lock released");
            }
        });
    }    
}

initializeWakeLock();

createIcons({
  icons: {
    Clock,
    CookingPot,
  }
});