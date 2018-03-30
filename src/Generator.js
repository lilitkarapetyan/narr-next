export default class Generator {
  constructor(category, callback) {
    this.category = category;
    this.callback = callback || (() => null);
    this.rate = 1;
    this.generators = category.entries.map(entry => {
      const holder = {};
      const interval = () =>
        (Math.round(Math.random() * 5000 * 60) + 1000 * 60) / this.rate;
      const gen = () => {
        this.callback(this.generate(entry));
        holder.interval = setTimeout(gen, interval());
      };
      gen();
      return holder;
    });
  }

  generate(categoryEntry) {
    const entry = {
      fields: {},
      mType: null,
      privacy: "public",
      category: this.category.name
    };
    categoryEntry.fields.forEach(field => {
      entry.fields[field.name] = this.generateField(field.type);
    });
    entry.mType = categoryEntry.id;
    return entry;
  }
  setRate(rate) {
    if (rate < 0) return;
    if (rate > 50) return;
    this.rate = rate;
  }
  Clear() {
    this.generators.forEach(gen => clearTimeout(gen.interval));
  }
  /* eslint-disable-next-line */
  generateField(type) {
    switch (type) {
      case "text":
        return "Lorem Ip";
      case "octas":
        return [
          "1/2",
          "1/3",
          "1/4",
          "1/5",
          "1/6",
          "1/7",
          "1/8",
          "1/9",
          "1/10",
          "1/11",
          "1/12"
        ][Math.random() * 11];
      case "angle":
        return Math.random() * 360;
      case "speed":
        return Math.random() * 100;
      case "distance":
        return Math.random() * 100;
      case "wind-state":
        return Math.random() * 12;
      case "integer":
        return Math.random() * 1000;
      case "day-nigh":
        return ["Day", "Night"][Math.random() * 2];
      case "frequency":
        return Math.random() * 500;
      default:
        return "No value generator";
    }
  }
}
