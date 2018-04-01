const timeout = window.setTimeout;
/* eslint-disable-next-line */
const now = window.Date.now;

class Simulation {
  constructor() {
    this.rate = 1;
    this.start = Date.now();

    this.getTime = this.getTime.bind(this);
    this.setTimeout = this.setTimeout.bind(this);
    // this.setInterval = this.setInterval.bind(this);
    this.setRate = this.setRate.bind(this);

    window.setTimeout = this.setTimeout;
    // window.setInterval = this.setInterval;
    window.Date.now = this.getTime;
    this.acum = 0;
  }

  getTime(sim) {
    if (!sim) return now();
    const diff = now() - this.start;
    return new Date(this.start + diff * this.rate + this.acum);
  }

  setRate(rate) {
    this.acum += this.getTime(true) - now();

    this.start = now();
    this.rate = rate;
  }

  setTimeout(callback, time) {
    return timeout(callback, time / this.rate);
  }
}

const sim = new Simulation();
export default sim;
