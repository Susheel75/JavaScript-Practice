const redux=require('redux')
const reduxLogger=require('redux-logger')


/// create an Action 
//const BUY_CAKE={type:'BUY_CAKE',payload:1}
// Action creator method.
const buyCake=(quantity)=>{
    return {type:'BUY_CAKE',payload:quantity}
}
const buyIcecream=(quantity)=>{
    return {type:'BUY_ICECREAM',payload:quantity}
}
/// initial State creation
const initialStateCake={cakeCount:10};
const initialStateIceCream={icecreamCount:20};
const reducerCake=(state=initialStateCake,action)=>{
    if(action.type=='BUY_CAKE'){
        return {...state,cakeCount:state.cakeCount-action.payload}
    }   
    else{
        return state;
    }
}
const reducerIceCream=(state=initialStateIceCream,action)=>{
    if(action.type=='BUY_ICECREAM'){
        return {...state,icecreamCount:state.icecreamCount-action.payload}
    }
    else{
        return state;
    }
}
// Procedure to create store
const rootReducer=redux.combineReducers({
    cake:reducerCake,
    iceCream:reducerIceCream
})
const logger=reduxLogger.createLogger();
const store=redux.createStore(rootReducer,redux.applyMiddleware(logger))
// var unsubscribe=store.subscribe(()=>{
//     console.log('Current State:',store.getState());
// })
console.log('Initial State:',store.getState())
store.dispatch(buyCake(2));
store.dispatch(buyIcecream(5));

// store.dispatch(buyCake(1));
// store.dispatch(buyCake(2));

