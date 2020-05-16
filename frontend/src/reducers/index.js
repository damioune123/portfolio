import { combineReducers } from "redux";
import homes from "./homeReducer";
import realtors from "./realtorReducer";
import metaData from "./metaDataReducer";

export default combineReducers({
    homes,
    realtors,
    metaData
});