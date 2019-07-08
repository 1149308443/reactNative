import { createAction } from "../../../common/util/reduxUtil";

export default {
  namespace: "homeScreen",

  state: {
      user: '',
      email: ''
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },

  effects: {
    *fetch({ payload }, { call, put, select }) {
      // eslint-disable-line
      yield put({ type: "homeScreen/save" });
      yield put(createAction('save')({user: 'xxx'}))
      yield put({
          type: 'save',
          payload: {user:'xxx'}
      })
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  }
};
