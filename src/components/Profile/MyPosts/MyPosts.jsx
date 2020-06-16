import React from 'react'
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const MyPosts = React.memo(props => {
    console.log('render')
    let postElements = props.posts.map( (p) => <Post message={p.message} likes={p.likes} key={p.id} /> )

    const onSubmit = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit} />
            {postElements}
        </div>
    )
})
 
const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'}
                validate={[required, maxLength10]}/>
            <button >Add post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm)

export default MyPosts