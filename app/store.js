import { configureStore } from "@reduxjs/toolkit";
import appflagsReducer from "../features/appflags/appflagsSlice";

export default configureStore({
	reducer: { appFlags: appflagsReducer },
});
