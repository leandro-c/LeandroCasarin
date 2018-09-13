
export default function promiseMiddleware() {
    
        return next => action => {
            const { promise, type, ...rest } = action;
    
            console.log("middleware " )
            if (!promise) return next(action);
    
            const SUCCESS = type;
    
            const REQUEST = type + '_REQUEST';
            const FAILURE = type + '_FAILURE';
    
            next({ ...rest, type: REQUEST });
    
            return promise
                .then(res => {
                    console.log("response ", res)
                    next({ ...rest, res, type: SUCCESS });
                    return true;
                }).catch(err => {
                    console.log("err", err);
                    if (err.status == 500 && err.data) {
                        /**TODO: Log action & store? */
                        // Raven.setExtraContext({
                            // action: action
                          // state: store.getState().toJS()
                        // });
    
                }
                next({err, ...rest, type: FAILURE});
    
                });
        };
    }
    