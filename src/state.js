const ActionTypes = {
    UPDATE_INPUT_STATUS: 'UPDATE-FIRST-STEP-STATUS',
    SUBSCRIBE: 'SUBSCRIBE',
    GET_STATE: 'GET-STATE'
};

let store = {
    _state: {
        Main: {
            FirstStep: [
                {ID: 1, GROUP_NAME: 'FirstStep', NAME: 'human', STATUS: true},
                {ID: 2, GROUP_NAME: 'FirstStep', NAME: 'ai', STATUS: false}
            ],
            FieldSize: [
                {ID: 3, GROUP_NAME: 'FieldSize', NAME: '3x3', STATUS: true, ROUTE: '/game3'},
                {ID: 4, GROUP_NAME: 'FieldSize', NAME: '4x4', STATUS: false, ROUTE: '/game4'},
                {ID: 5, GROUP_NAME: 'FieldSize', NAME: '5x5', STATUS: false, ROUTE: '/game5'}
            ],
        },
        Page3: {
            Cells: [
                {ID: 1, NUMBER: 1, STATUS: false,},
                {ID: 2, NUMBER: 2, STATUS: false,},
                {ID: 3, NUMBER: 3, STATUS: false,},
                {ID: 4, NUMBER: 4, STATUS: false,},
                {ID: 5, NUMBER: 5, STATUS: false,},
                {ID: 6, NUMBER: 6, STATUS: false,},
                {ID: 7, NUMBER: 7, STATUS: false,},
                {ID: 8, NUMBER: 8, STATUS: false,},
                {ID: 9, NUMBER: 9, STATUS: false,}
            ],
        },
        Page4: {
            Cells: [
                {ID: 1, NUMBER: 1, STATUS: false,},
                {ID: 2, NUMBER: 2, STATUS: false,},
                {ID: 3, NUMBER: 3, STATUS: false,},
                {ID: 4, NUMBER: 4, STATUS: false,},
                {ID: 5, NUMBER: 5, STATUS: false,},
                {ID: 6, NUMBER: 6, STATUS: false,},
                {ID: 7, NUMBER: 7, STATUS: false,},
                {ID: 8, NUMBER: 8, STATUS: false,},
                {ID: 9, NUMBER: 9, STATUS: false,},
                {ID: 10, NUMBER: 10, STATUS: false,},
                {ID: 11, NUMBER: 11, STATUS: false,},
                {ID: 12, NUMBER: 12, STATUS: false,},
                {ID: 13, NUMBER: 13, STATUS: false,},
                {ID: 14, NUMBER: 14, STATUS: false,},
                {ID: 15, NUMBER: 15, STATUS: false,},
                {ID: 16, NUMBER: 16, STATUS: false,}
            ],
        },
        Page5: {
            Cells: [
                {ID: 1, NUMBER: 1, STATUS: false,},
                {ID: 2, NUMBER: 2, STATUS: false,},
                {ID: 3, NUMBER: 3, STATUS: false,},
                {ID: 4, NUMBER: 4, STATUS: false,},
                {ID: 5, NUMBER: 5, STATUS: false,},
                {ID: 6, NUMBER: 6, STATUS: false,},
                {ID: 7, NUMBER: 7, STATUS: false,},
                {ID: 8, NUMBER: 8, STATUS: false,},
                {ID: 9, NUMBER: 9, STATUS: false,},
                {ID: 10, NUMBER: 10, STATUS: false,},
                {ID: 11, NUMBER: 11, STATUS: false,},
                {ID: 12, NUMBER: 12, STATUS: false,},
                {ID: 13, NUMBER: 13, STATUS: false,},
                {ID: 14, NUMBER: 14, STATUS: false,},
                {ID: 15, NUMBER: 15, STATUS: false,},
                {ID: 16, NUMBER: 16, STATUS: false,},
                {ID: 17, NUMBER: 17, STATUS: false,},
                {ID: 18, NUMBER: 18, STATUS: false,},
                {ID: 19, NUMBER: 19, STATUS: false,},
                {ID: 20, NUMBER: 20, STATUS: false,},
                {ID: 21, NUMBER: 21, STATUS: false,},
                {ID: 22, NUMBER: 22, STATUS: false,},
                {ID: 23, NUMBER: 23, STATUS: false,},
                {ID: 24, NUMBER: 24, STATUS: false,},
                {ID: 25, NUMBER: 25, STATUS: false,}
            ],
        },
    },
    _callSubscriber() {},
    dispatch(action) {
        switch (action.type) {
            case ActionTypes.UPDATE_INPUT_STATUS:
                if (action.ArrName === 'FirstStep') {
                    this._state.Main.FirstStep.forEach(item => {
                            if (item.ID.toString() === action.Id) {
                                item.STATUS = action.NewStatus;
                            } else {
                                item.STATUS = false;
                            }
                        }
                    );
                } else if (action.ArrName === 'FieldSize') {
                    this._state.Main.FieldSize.forEach(item => {
                            if (item.ID.toString() === action.Id) {
                                item.STATUS = action.NewStatus;
                            } else {
                                item.STATUS = false;
                            }
                        }
                    );
                }

                this._callSubscriber();

                break;

            case ActionTypes.SUBSCRIBE:
                this._callSubscriber = action.observer;

                break;

            case ActionTypes.GET_STATE:
                return this._state;

            default:
                return this._state;
        }
    },
    getState() {
        return this._state;
    }
};

export const updateInputStatus = (id, checkStatus, name) =>
    ({type: ActionTypes.UPDATE_INPUT_STATUS, Id: id, NewStatus: checkStatus, ArrName: name});
export default store;