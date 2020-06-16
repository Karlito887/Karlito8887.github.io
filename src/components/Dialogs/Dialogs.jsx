import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'


const Dialogs = (props) => {
    let dialogElements = props.dialogData.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)
    let messageElements = props.messageData.map((m) => <Message message={m.message} key={m.id} />)

    const onSubmit = (values) => {
        props.sendMessage(values.newMessageText)
        values.newMessageText = ''
    }

    return (
        <div className={s.wrapperDilogs}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <DialogsReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(10)

const DialogsForm = (props) => {
    return <form className={s.formSendMessage} onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newMessageText' validate={[required, maxLength]} />
        <button>Send message</button>
    </form>
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)

export default Dialogs