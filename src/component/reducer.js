export const reducer = (state,action) =>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item:state.item.filter((cur)=>{
                return cur.id !== action.payload;
            })
        }
    }

    if(action.type === "CLEAR_ALL"){
        return{...state,item:[]}
    }

    if(action.type ==="INCREMENT"){
        let updateCart = state.item.map((cur)=>{
            if(cur.id === action.payload){

                return{...cur,quantity:cur.quantity + 1};
            }
            return cur;
        })
            return {...state,item:updateCart};
    }

    if(action.type === "DECREMET"){
        const updatedCart = state.item.map((cur)=>{
            if(cur.id === action.payload){
                return{...cur,quantity:cur.quantity - 1};
            }
            return cur;
        }).filter((cur) =>{ return cur.quantity !==0})
        return {...state,item:updatedCart}
    }

    if(action.type === "TOTAL_ITEM"){
        let { totalItem,totalAmount } = state.item.reduce((accum,curVal)=>{
        let {quantity,price} =curVal;
        let updatedTotalAmount = quantity * price;
        accum.totalAmount += updatedTotalAmount;
        accum.totalItem += quantity;
        return accum;
        },{
            totalItem : 0,
            totalAmount :0,
        });
        return {...state,totalItem ,totalAmount}
    }

  
    return state;
};