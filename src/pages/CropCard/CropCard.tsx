import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom'

export function CropCard() {
    return (
        <div className="dashboard">
            <p>Contents:</p>
            <ul className="content-list"/>
            <li>
                <Link to="general">General Information</Link>
            </li>
            <li>
                <Link to="land-preparation">Land Preparation</Link>
            </li>
            <li>
                <Link to="sowing">Sowing</Link>
            </li>
            <li>
                <Link to="inputs">Inputs</Link>
            </li>
            <li>
                <Link to="harvesting">Harvesting</Link>
            </li>
            <li>
                <Link to="post-harvesting-and-storage">Post Harvest And Storage</Link>
            </li>
            <li>
                <Link to="marketing">Marketing</Link>
            </li>
            <li>
                <Link to="all-costs">All Costs</Link>
            </li>
            <li>
                <Link to="economic-analysis">Economic Analysis</Link>
            </li>
        </div>
    )
}
