export default class Generator {
  constructor(category, callback) {
    this.category = category;
    this.callback = callback || (() => null);
    this.rate = 1;
    this.active = true;

    this.generators = category.entries.map(entry => {
      const holder = {};
      const interval = () =>
        (Math.round(Math.random() * 5000) + 1000 * 60) / this.rate;
      const gen = () => {
        if (this.active) this.callback(this.generate(entry));
        holder.interval = setTimeout(gen, interval());
      };
      gen();
      return holder;
    });
    this.Active = this.Active.bind(this);
  }
  Active(isActive) {
    this.active = isActive;
    if (!isActive) this.Clear();
    else
      this.generators = this.category.entries.map(entry => {
        const holder = {};
        const interval = () =>
          (Math.round(Math.random() * 5000) + 1000 * 60) / this.rate;
        const gen = () => {
          if (this.active) this.callback(this.generate(entry));
          holder.interval = setTimeout(gen, interval());
        };
        holder.interval = setTimeout(gen, interval());
        return holder;
      });
  }
  generate(categoryEntry) {
    const entry = {
      fields: {},
      mType: null,
      privacy: ["public", "private"][Math.floor(Math.random() * 2)],
      category: this.category.name,
      color: this.category.color
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
        return ["1/8", "2/8", "3/8", "4/8", "5/8", "6/8", "7/8", "8/8"][
          Math.random() * 7
        ];
      case "angle":
        return Math.round(Math.ceil(Math.random() * 360 * 10)) / 10;
      case "speed":
        return Math.round(Math.random() * 100 * 10) / 10;
      case "distance":
        return Math.round(Math.random() * 100 * 10) / 10;
      case "wind-state":
        return Math.ceil(Math.random() * 12);
      case "integer":
        return Math.ceil(Math.random() * 30);
      case "day-night":
        return ["Day", "Night"][Math.random() * 2];
      case "frequency":
        return Math.round(Math.random() * 500 * 10) / 10;
      default:
        return "No value generator";
    }
  }
}
