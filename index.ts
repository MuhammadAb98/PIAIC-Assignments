class CountdownTimer {
  private seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  startTimer(): void {
    console.log(`Countdown started for ${this.seconds} seconds.`);

    const intervalId = setInterval(() => {
      console.log(`${this.seconds} seconds remaining...`);
      this.seconds--;

      if (this.seconds < 0) {
        clearInterval(intervalId);
        console.log("Time's up! Countdown complete.");
      }
    }, 1000);
  }
}

// Run the Countdown Timer
const timer = new CountdownTimer(5); // Set the countdown time in seconds
timer.startTimer();
