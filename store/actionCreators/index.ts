import * as UserActionCreators from "./user"
import * as SerialsSearchActionCreators from "./search"
import * as SerialActionCreator from './serial'

export default {
  ...UserActionCreators,
  ...SerialsSearchActionCreators,
  ...SerialActionCreator,
}