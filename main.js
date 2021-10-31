class DigitalClock {
    constructor(element) {
        this.element = element;
        console.log(this.element);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;

        this.element.querySelector(".clock-time").textContent = timeFormatted;

    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours(),
            minute: now.getMinutes()
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.update();
