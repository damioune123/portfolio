import { combineReducers } from "redux";
import homes from "./homeReducer";
import realtors from "./realtorReducer";

export default combineReducers({
    homes,
    realtors
});