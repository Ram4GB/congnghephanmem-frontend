import { createAction } from "redux-actions";
import { MODULE_NAME } from "./models";
export const getListFlight = createAction(`${MODULE_NAME}_GET_LIST_FLIGHT`);
export const getListAirPlane = createAction(
  `${MODULE_NAME}_GET_LIST_AIR_PLANE`
);

export const getListLocation = createAction(`${MODULE_NAME}_LIST_LOCATION`);
export const getListAirport = createAction(`${MODULE_NAME}_LIST_AIRPORT`);
