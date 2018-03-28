export default class Generator {
  constructor(category, callback) {
    this.category = category;
    this.callback = callback || (() => null);
    this.rate = 1;
    this.generators = category.entries.map(entry => {
      const holder = {};
      const interval = () =>
        (Math.round(Math.random() * 5000) + 1000) / this.rate;
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
      text: {},
      mType: null,
      privacy: "public"
    };
    categoryEntry.fields.forEach(field => {
      entry.text[field.name] = this.generateField(field.type);
    });
    entry.mType = categoryEntry.name;
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
      default:
        return "dummy";
    }
  }
}
