import React, {FC, useState} from 'react';
import './CommentOrRecommmendationBox.scss';
import CommentOrRecommendation from "../../Interfaces/CommentOrRecommendation"

interface CommentOrRecommmendationBoxProps {
    comment: CommentOrRecommendation
    setComments
    comments: CommentOrRecommendation[]
}


const CommentOrRecommmendationBox: FC<CommentOrRecommmendationBoxProps> = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const editComment = () => {
        setValue(props.comment.value)
        setIsEditing(true)
    }

    const saveComment = () => {
        props.comment.value = value
        setIsEditing(false)
    }

    const deleteComment = () => {
        const index = props.comments.indexOf(props.comment)
        if (index == -1) return false;
        props.setComments((comments) => {
            return [...comments.splice(0, index),...comments.splice(index+1)]
        })
        return true;
    }

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 8fr 1fr 1fr'}}>
            <p style={{marginRight: '1em'}}>{props.comment.date.toLocaleDateString()}</p>
            {
                isEditing ?
                    <>
                        <textarea style={{height: 'auto'}} value={value} onChange={onChange}/>
                        <button onClick={saveComment} style={{color: 'blue'}}>Save</button>
                        <button onClick={() => setIsEditing(false)} style={{color: 'red'}}>Cancel</button>
                    </> :
                    <>
                        <pre style={{wordBreak: 'break-all'}}>{props.comment.value}</pre>
                        <button onClick={editComment} style={{color: 'blue'}}>Edit</button>
                        <button onClick={deleteComment} style={{color: 'red'}}>Delete</button>
                    </>
            }
        </div>
    );
}

export default CommentOrRecommmendationBox;
