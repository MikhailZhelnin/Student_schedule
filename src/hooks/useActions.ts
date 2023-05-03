import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {timeTableActions} from "../store/timetable/timetable/timetable.slice";

const allActions = {
  ...timeTableActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}