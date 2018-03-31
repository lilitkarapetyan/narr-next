import { SetSimulationRate, ToggleSimulation } from "../actions";
import { handleActions } from "redux-actions";
import Simulation from "../Simulation";

const initialState = {
  rate: 1,
  running: false
};

const reducer = handleActions(
  {
    [SetSimulationRate]: (state, action) => {
      Simulation.setRate(action.payload);
      return {
        ...state,
        rate: action.payload
      };
    },
    [ToggleSimulation]: state => ({
      ...state,
      running: !state.running
    })
  },
  initialState
);

export default reducer;
