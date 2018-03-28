import SimpleReactValidator from "simple-react-validator";

//  text - any text
//  angle - integer between 0 and 360
//  speed - floating point between 0 and 100
//  location - special two-box control, the first taking a floating point from -180 to +180, the second taking a floating point from 0 to 360.
//  distance - floating point between 0 and 100
//  octas - drop-down list with 8 fractions, running from 1/8 to 8/8
//  wind-state - drop down from 1 to 12
//  integer - any integer
//  day-night toggle between the two modes ("Day"/"Night")
//  frequency - a positive floating point, from 0 to 500

const text = {
  message: "This text is not valid",
  rule() {
    return true;
  }
};

const angle = {
  message: ":attribute needs to be a Integer  between 0 and 360",
  rule(val) {
    const number = parseFloat(val);
    return number >= 0 && number < 360 && Number.isInteger(number);
  }
};

const speed = {
  message: ":attribute needs to be between 0 and 100",
  rule(val) {
    return val >= 0 && val <= 100;
  }
};

const distance = {
  message: ":attribute needs to be between 0 and 100",
  rule(val) {
    return val >= 0 && val <= 100;
  }
};

const windState = {
  message: ":attribute needs to be betwen 1 and 12",
  rule(val) {
    return val > 0 && val <= 12 && Number.isInteger(val);
  }
};

const integer = {
  message: ":attribute needs to be a Integer",
  rule(val) {
    return Number.isInteger(val);
  }
};

const dayNight = {
  message: ":attribute needs to be either Day/Night",
  rule(val) {
    return val === "Day" || val === "Night";
  }
};

const frequency = {
  message: ":attribute needs to be between 0 and 500",
  rule(val) {
    return val > 0 && val <= 500;
  }
};

export default () =>
  new SimpleReactValidator({
    text,
    angle,
    speed,
    distance,
    "wind-state": windState,
    integer,
    "day-night": dayNight,
    frequency
  });
