const CATEGORY_REQUESTED='CATEGORY_REQUESTED'
const CATEGORY_SUCCESS='CATEGORY_SUCCESS'
const CATEGORY_FAILED='CATEGORY_FAILED'
const categoryRequested=()=>{
    return {type:CATEGORY_REQUESTED}
}
const categorySuccess=(data)=>{
    return {type:CATEGORY_SUCCESS,payload:data}
}
const categoryFailed=(err)=>{
    return {type:CATEGORY_FAILED,payload:err}
}
const initialState={
    loading:false,
    data:[],
    error:''
}
const reducer=(state=initialState,action)=>{
    if(action.type=='')
}