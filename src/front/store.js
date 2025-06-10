export const initialStore=()=>{
  return{
    message: null,
    token: null,
    isLoginSuccessful: false,
  }
}



export default function storeReducer(store, action = {}) {
  switch(action.type){
       
    case 'fetchedToken':
    {
      const {message, token, isLoginSuccessful} = action.payload;

      return {
        ...store,
        message: message,
        token: token,
        isLoginSuccessful: isLoginSuccessful,
      }
    }

    case 'loggedOut':
    {
      const {message, token, isLoginSuccessful} = action.payload;
      
      return {
        ...store,
        message: message,
        token: token,
        isLoginSuccessful: isLoginSuccessful,
      }
    }

    default:
      throw Error('Unknown action.');
  }    
}
