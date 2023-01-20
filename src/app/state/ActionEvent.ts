
export interface ActionEvent{
  type:ActionTypes,
  payload?:any
}

export enum ActionTypes{
  INCREMENT_AGE="Increment Age by 5",
  DISPLAY_INFO="Display Infos",
  CHECK_AGE="Check age",
  INCREMENT_SALARY="Increment salary"
}
