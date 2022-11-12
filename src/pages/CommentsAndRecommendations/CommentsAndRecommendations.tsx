import React, {FC, ReactElement, useEffect, useState} from 'react';
import './CommentsAndRecommendations.scss';
import CommentOrRecommmendationBox from "../../Components/CommentOrRecommmendationBox/CommentOrRecommmendationBox";
import useCommentsOrRecommendationsStore from "../../Models/useCommentsOrRecommendationsStore";

interface CommentsAndRecommendationsProps {
    topic: string
}

const CommentsAndRecommendations: FC<CommentsAndRecommendationsProps> = (props) => {
    const commentsOrRecommendations = useCommentsOrRecommendationsStore(state => state.values)
    const addCOR = useCommentsOrRecommendationsStore(state => state.add)
    const [isPrinting, setIsPrinting] = useState(false)
    const [commentValue, setCommentValue] = useState('')
    const onChange = (e) => {
        setCommentValue(e.target.value)
    }
    const addComment = () => {
        if (commentValue === '') return;
        addCOR({id: Math.random().toString(), date: new Date(), value: commentValue, topic: props.topic})
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
    const beforePrint = () => {
        setIsPrinting(true)
    }
    const afterPrint = () => {
        setIsPrinting(false)
    }
    useEffect(() => {
        window.addEventListener('beforeprint', beforePrint);
        window.addEventListener('afterprint', afterPrint);
        return () => {
            window.removeEventListener('beforeprint', beforePrint);
            window.removeEventListener('afterprint', afterPrint);
        }
    })

    return (
        <div className="CommentsAndRecommendations">
            Comments/Recommendations about {props.topic}
            <br/>
            {
                !isPrinting ?
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <input style={{flex: '1 1 auto'}} placeholder={"Please write here"}
                               value={commentValue} onChange={onChange} onKeyPress={keyPressed}/>
                        <button style={{flex: '1 1 auto'}} onClick={addComment}>Add Comment</button>
                        <button onClick={pagePreview} style={{flex: '0 0 auto', color: 'blue'}}>Page Preview</button>
                    </div> : <></>
            }
            {/* word, excel, pdf */}

            <div style={{display: 'grid'}}>
                {
                    commentsOrRecommendations.filter(cor => cor.topic === props.topic).map((comment) => {
                        return (
                            <CommentOrRecommmendationBox isPrinting={isPrinting} comment={comment}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CommentsAndRecommendations;
