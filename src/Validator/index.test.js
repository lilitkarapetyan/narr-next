import Validator from "./index";

describe("Validators", () => {
  let current;
  const getValidator = () => current;
  beforeEach(() => {
    current = Validator();
  });

  describe("Text", () => {
    it("has text validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `text`)).toBe(undefined);
    });
  });

  describe("Angle", () => {
    it("has angle validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `angle`)).toBe(undefined);
    });

    it("angle >= 0 valid", () => {
      const validator = getValidator();
      validator.message("test", 0, `angle`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 1, `angle`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("angle <  0 invalid", () => {
      const validator = getValidator();
      validator.message("test", -1, `angle`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", -100, `angle`);
      expect(validator.fieldValid("test")).toBe(false);
    });

    it("angle <  360 valid", () => {
      const validator = getValidator();
      validator.message("test", 359, `angle`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 5, `angle`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("angle is float fail", () => {
      const validator = getValidator();
      validator.message("test", 0.5, `angle`);
      expect(validator.fieldValid("test")).toBe(false);
    });
  });

  describe("Speed", () => {
    it("has speed validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `speed`)).toBe(undefined);
    });

    it("speed >= 0 valid", () => {
      const validator = getValidator();
      validator.message("test", 0, `speed`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 1, `speed`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("speed <  0 invalid", () => {
      const validator = getValidator();
      validator.message("test", -1, `speed`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", -100, `speed`);
      expect(validator.fieldValid("test")).toBe(false);
    });

    it("speed <=  100 valid", () => {
      const validator = getValidator();
      validator.message("test", 100, `speed`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 50, `speed`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("speed is float", () => {
      const validator = getValidator();
      validator.message("test", 0.5, `speed`);
      expect(validator.fieldValid("test")).toBe(true);
    });
  });

  describe("distance", () => {
    it("has distance validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `distance`)).toBe(undefined);
    });

    it("distance >= 0 valid", () => {
      const validator = getValidator();
      validator.message("test", 0, `distance`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 1, `distance`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("distance <  0 invalid", () => {
      const validator = getValidator();
      validator.message("test", -1, `distance`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", -100, `distance`);
      expect(validator.fieldValid("test")).toBe(false);
    });

    it("distance <=  100 valid", () => {
      const validator = getValidator();
      validator.message("test", 100, `distance`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 50, `distance`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("distance is float", () => {
      const validator = getValidator();
      validator.message("test", 0.5, `distance`);
      expect(validator.fieldValid("test")).toBe(true);
    });
  });

  describe("windState", () => {
    it("has windState validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `wind-state`)).toBe(undefined);
    });

    it("windState > 0 valid", () => {
      const validator = getValidator();
      validator.message("test", 0, `wind-state`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", 1, `wind-state`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("windState <  0 invalid", () => {
      const validator = getValidator();
      validator.message("test", -1, `wind-state`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", -100, `wind-state`);
      expect(validator.fieldValid("test")).toBe(false);
    });

    it("windState <=  12 valid", () => {
      const validator = getValidator();
      validator.message("test", 12, `wind-state`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 5, `wind-state`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("windState is float fail", () => {
      const validator = getValidator();
      validator.message("test", 0.5, `wind-state`);
      expect(validator.fieldValid("test")).toBe(false);
    });
  });

  describe("integer", () => {
    it("has integer validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `integer`)).toBe(undefined);
    });

    it("integer is float fail", () => {
      const validator = getValidator();
      validator.message("test", 0.5, `integer`);
      expect(validator.fieldValid("test")).toBe(false);
    });
  });

  describe("Day/Night", () => {
    it("has dayNight validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `day-night`)).toBe(undefined);
    });

    it("is Day valid", () => {
      const validator = getValidator();
      validator.message("test", "Day", `day-night`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("is Night valid", () => {
      const validator = getValidator();
      validator.message("test", "Night", `day-night`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it("is invalid on other", () => {
      const validator = getValidator();
      validator.message("test", "sdsds", `day-night`);
      expect(validator.fieldValid("test")).toBe(false);
    });
  });

  describe("frequency", () => {
    it("has validator", () => {
      const validator = getValidator();
      expect(validator.message("test", "", `frequency`)).toBe(undefined);
    });

    it(" > 0 valid ", () => {
      const validator = getValidator();
      validator.message("test", 0, `frequency`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", 100, `frequency`);
      expect(validator.fieldValid("test")).toBe(true);
    });
    it(" <= 500 valid", () => {
      const validator = getValidator();
      validator.message("test", 500, `frequency`);
      expect(validator.fieldValid("test")).toBe(true);
      validator.message("test", 200, `frequency`);
      expect(validator.fieldValid("test")).toBe(true);
    });

    it(" > 500 invalid", () => {
      const validator = getValidator();
      validator.message("test", 501, `frequency`);
      expect(validator.fieldValid("test")).toBe(false);
      validator.message("test", 800, `frequency`);
      expect(validator.fieldValid("test")).toBe(false);
    });

    it(" accepts floats", () => {
      const validator = getValidator();
      validator.message("test", 300.5, `frequency`);
      expect(validator.fieldValid("test")).toBe(true);
    });
  });
});
