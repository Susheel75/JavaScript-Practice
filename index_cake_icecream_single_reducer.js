const redux=require('redux')

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
const initialState={cakeCount:10,icecreamCount:20};
const reducer=(state=initialState,action)=>{
    if(action.type=='BUY_CAKE'){
        return {...state,cakeCount:state.cakeCount-action.payload}
    }
    else  if(action.type=='BUY_ICECREAM'){
        return {...state,icecreamCount:state.icecreamCount-action.payload}
    }
    else{
        return state;
    }
}
// Procedure to create store
const store=redux.createStore(reducer)
var unsubscribe=store.subscribe(()=>{
    console.log('Current State:',store.getState());
})
console.log('Initial State:',store.getState())
store.dispatch(buyCake(2));
store.dispatch(buyIcecream(5));

// store.dispatch(buyCake(1));
// store.dispatch(buyCake(2));

