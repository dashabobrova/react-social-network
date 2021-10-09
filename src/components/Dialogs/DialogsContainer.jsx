import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogsPade-reducer";
import StoreContext from "../../storeContext";
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
            
                let onNewMessageBody = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                
                return <Dialogs updateNewMessageBody={onNewMessageBody} 
                                sendMessage={onSendMessageClick} 
                                dialogsPage={store.getState().dialogsPage}/>
            }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer;