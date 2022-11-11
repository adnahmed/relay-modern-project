import React, {FC, ReactElement} from 'react';
import './FinanceOrCommentCard.scss';
import {Link, Routes, useResolvedPath} from "react-router-dom";
import {Route, useParams} from "react-router";
import CommentsAndRecommendations from "../CommentsAndRecommendations/CommentsAndRecommendations";

interface DataDashboardProps {
    element: ReactElement
}

const FinanceOrCommendCard: FC<DataDashboardProps> = (props) => {
    // eslint-disable-next-line no-restricted-globals
    const dataPath =<p style={{ textTransform: 'capitalize', display: 'inline'}}>{(location.pathname.split('/').reverse()[0]).replaceAll(/[^a-zA-Z]/g, ' ')}</p>
    return (
        <div className="DataDashboard">
            <Routes>
                <Route index element={
                    <>
                        <ul>
                            <li>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link to="finance">{dataPath} Financial Table</Link>
                            </li>
                            <li>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link to="discuss"> Comments / Recommendations about {dataPath} </Link>
                            </li>
                        </ul>
                    </>
                }/>
                <Route path="finance" element={props.element}/>
                {/* eslint-disable-next-line no-restricted-globals */}
                <Route path="discuss" element={<CommentsAndRecommendations topic={dataPath} />}/>
            </Routes>
        </div>
    );
}

export default FinanceOrCommendCard;
