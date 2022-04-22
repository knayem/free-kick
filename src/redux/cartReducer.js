const initialState = {

    cartItems: [],
   
}


export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TO_CART': {



            const alreadyAdded = state.cartItems.find(crt => crt._id === action.payload._id );

            if(alreadyAdded){
                return{
                 ...state,
                       
                          }
              
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
    
    
                }

    
            }



        }



        case 'INCREMENT': {


            const itemIndex = state.cartItems.findIndex(cartItem=>cartItem._id === action.payload._id)
  
            if (state.cartItems[ itemIndex].cartQty >=1) {
  
  
            state.cartItems[ itemIndex ].cartQty +=1
  
         
  
            }
           
  
  
  
          }
          
          
  
        case 'DECREMENT_CART': {
  
  
            const itemIndex = state.cartItems.findIndex(cartItem=>cartItem._id === action.payload._id)
  
            if (state.cartItems[itemIndex].cartQty >1) {
  
  
            state.cartItems[itemIndex].cartQty -=1
  
         
  
            }
            
        //     else if (state.cartItems[itemIndex].cartQty ==1){
        //     const nxtCartitem = state.cartItems.filter(cartItem=>cartItem._id !== action.payload._id)
                 
        //    state.cartItems=nxtCartitem;
        //     }
            
         
  
  
          }



         case 'REMOVE_FROM_CART': {

            return {
                ...state,
                cartItems: state.cartItems.filter(itm=>itm._id !== action.payload._id)


            }


        }

        default: return state

    }


    
}



// case 'INCREMENT': {


//           const itemIndex = state.cartItems.findIndex(cartItem=>cartItem._id === action.payload._id)

//           if (state.cartItems[ itemIndex].cartQty >=1) {


//           state.cartItems[ alreadyAdded ].cartQty +=1

       

//           }
//           else{


//           }



//          }


//case 'RESTART_FROM_CART': {
 //   return { ...state };
 // }

// case 'DECREMENT_CART': {


//           const itemIndex = state.cartItems.findIndex(cartItem=>cartItem._id === action.payload._id)

//           if (state.cartItems[itemIndex].cartQty >1) {


//           state.cartItems[itemIndex].cartQty -=1

       

//           }
//           else if (state.cartItems[itemIndex].cartQty ==1){
//           const nxtCartitem = state.cartItems.filter(cartItem=>cartItem._id !== action.payload._id)
               
//          state.cartItems=nxtCartitem;
//           }
        


//         }