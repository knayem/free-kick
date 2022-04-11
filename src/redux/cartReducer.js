const initialState = {

    cartItems: []

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

            // return {
            //             ...state,
            //              cartItems: [...state.cartItems, action.payload]
        
        
            //          }


        }

        case 'REMOVE_FROM_CART': {

            return {
                ...state,
                cartItems: state.cartItems.filter(itm=>itm.id !== action.payload.id)


            }


        }

        default: return state

    }


    
}











// const initialState ={ 

// cartItems : []

// }


// export const cartReducer = (state= initialState, action) =>{

// switch (action.type) {

//   case 'ADD_TO_CART' :{


//     const alreadyAdded =state.cartItems.find(item => item.id===action.payload.id);
    
//     if (alreadyAdded) {
//         return{
//             ...state

//         }
//     }

//     else{

//         return{

//             ...state,
//             cartItems: [...state.cartItems, action.payload]

//         }

//     }

//   }

//   case 'REMOVE_TO_CART' :{

//          return{

//             ...state,
//             cartItems: state.cartItems.filter(item => item.id !== action.payload.id)

//          }

//   }

//   default: return state

// }

// }