import React, {FC, ReactElement} from 'react';
import './TopicDashboard.scss';
import {Link, Routes, useResolvedPath} from "react-router-dom";
import {Route, useParams} from "react-router";
import CommentsAndRecommendations from "../CommentsAndRecommendations/CommentsAndRecommendations";
import Information from "../Information/Information";

interface DataDashboardProps {
    element: ReactElement
}

const TopicDashboard: FC<DataDashboardProps> = (props) => {
    // eslint-disable-next-line no-restricted-globals
    const topic =(location.pathname.split('/').reverse()[0]).replaceAll(/[^a-zA-Z]/g, ' ')
    return (
        <div className="DataDashboard">
            <Routes>
                <Route index element={
                    <>
                        <ul>
                            <li style={{color: 'blue'}}>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link to="finance">{topic} Financial Table</Link>
                            </li>
                            <li style={{color: 'green'}}>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link to="discuss"> Comments / Recommendations about {topic} </Link>
                            </li>
                            <li style={{color: 'magenta'}}>
                                <Link to="information"> Information on {topic}</Link>
                            </li>
                        </ul>
                    </>
                }/>
                <Route path="finance" element={props.element}/>
                {/* eslint-disable-next-line no-restricted-globals */}
                <Route path="discuss" element={<CommentsAndRecommendations topic={topic} />}/>
                <Route path="information" element={<Information topic={topic} />} />
            </Routes>
        </div>
    );
}

export default TopicDashboard;
