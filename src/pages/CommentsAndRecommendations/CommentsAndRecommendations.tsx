import React, {FC, ReactElement, useState} from 'react';
import './CommentsAndRecommendations.scss';
import CommentOrRecommendation from "../../Interfaces/CommentOrRecommendation";
import CommentOrRecommmendationBox from "../../Components/CommentOrRecommmendationBox/CommentOrRecommmendationBox";
import create from 'zustand'
import persist from 'zustand/middleware'

interface CommentsAndRecommendationsProps {
    topic: ReactElement
}



const CommentsAndRecommendations: FC<CommentsAndRecommendationsProps> = (props) => {
    const [previewPage, setPreviewPage] = useState(false)
    const [comments, setComments] = useState<CommentOrRecommendation[]>([])
    const [commentValue, setCommentValue] = useState('')
    const onChange = (e) => {
        setCommentValue(e.target.value)
    }
    const addComment = () => {
        if (commentValue === '') return;
        setComments((comments) => [...comments, {key: Math.random().toString(), date: new Date(), value: commentValue}])
        setCommentValue('')
    }
    const keyPressed = (e) => {
        if (e.key === "Enter") {
            addComment()
        }
    }
    const pagePreview = () => {
        window.print()
    }
    return (
        <div className="CommentsAndRecommendations">
            Comments/Recommendations about {props.topic}
            <br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <input style={{flex: '1 1 auto'}} placeholder={"Please write here"}
                       value={commentValue} onChange={onChange} onKeyPress={keyPressed}/>
                <button style={{flex: '1 1 auto'}} onClick={addComment}>Add Comment</button>
                <button onClick={pagePreview} style={{flex: '0 0 auto', color: 'blue'}}>Page Preview</button>
            </div>
            {/* word, excel, pdf */}

            <div style={{display: 'grid'}}>
                {
                    comments.map((comment) => {
                        return (
                            <CommentOrRecommmendationBox comment={comment} comments={comments} setComments={setComments}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CommentsAndRecommendations;
