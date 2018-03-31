import { persistentReducer } from "redux-pouchdb-plus";

// const Logging = () => ({
//   onInit: (reducerName, reducerState) => {
//     console.log(`INITIALIZED :: ${reducerName}`, reducerState);
//     // Called when this reducer was initialized
//     // (the state was loaded from or saved to the
//     // database for the first time or after a reinit action).
//   },
//   onUpdate: (reducerName, reducerState) => {
//     console.log(`UPDATED :: ${reducerName}`, reducerState);

//     // Called when the state of reducer was updated with
//     // data from the database.
//     // Cave! The store still contains the state before
//     // the updated reducer state was applied to it.
//   },
//   onSave: (reducerName, reducerState) => {
//     console.log(`SAVED :: ${reducerName}`, reducerState);

//     // Called every time the state of this reducer was
//     // saved to the database.
//   }
// });

export default (reducer, name) => persistentReducer(reducer, { name });
