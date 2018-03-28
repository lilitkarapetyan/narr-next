import { Input } from "reactstrap";
import React from "react";

const InputSelector = ({ onChange, type, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <Input
          type="text"
          {...rest}
          onChange={evt => onChange(evt.target.value)}
        />
      );
    case "angle":
    case "speed":
    case "distance":
    case "integer":
    case "frequency":
      return (
        <Input
          type="number"
          {...rest}
          onChange={evt => onChange(evt.target.value)}
        />
      );

    case "location":
      return (
        <div>
          <Input
            {...rest}
            onChange={evt =>
              onChange({
                first: evt.target.value,
                second: (rest.value && rest.value.second) || 0
              })
            }
          />
          <Input
            {...rest}
            onChange={evt =>
              onChange({
                first: (rest.value && rest.value.first) || 0,
                second: evt.target.value
              })
            }
          />
        </div>
      );
    case "octas":
      return (
        <Input
          type="select"
          {...rest}
          onChange={evt => onChange(evt.target.value)}
        >
          <option />
          <option>1/8</option>
          <option>2/8</option>
          <option>3/8</option>
          <option>4/8</option>
          <option>5/8</option>
          <option>6/8</option>
          <option>7/8</option>
          <option>8/8</option>
        </Input>
      );
    case "wind-state":
      return <Input {...rest} onChange={evt => onChange(evt.target.value)} />;
    case "day-night":
      return (
        <Input
          type="select"
          {...rest}
          onChange={evt => onChange(evt.target.value)}
        >
          <option />
          <option>Day</option>
          <option>Night</option>
        </Input>
      );
    default:
      return <div> Invalid type {type}</div>;
  }
};

export default InputSelector;
