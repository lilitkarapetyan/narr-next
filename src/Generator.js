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
      privacy: ["public", "private"][Math.floor(Math.random() * 2)],
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
      default:
        return "dummy";
    }
  }
}
