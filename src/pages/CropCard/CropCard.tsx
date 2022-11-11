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
                <Link to="land-preparation-and-sowing">Land Preparation And Sowing </Link>
            </li>
            <li>
                <Link to="inputs">Inputs</Link>
            </li>
            <li>
                <Link to="harvesting-and-post-harvest">Harvesting</Link>
            </li>
            <li>
                <Link to="integrated-pest-and-disease-management">Integrated Pest and Disease Management</Link>
            </li>
            <li>
                <Link to="post-harvest">Post Harvest</Link>
            </li>
            <li>
                <Link to="marketing">Marketing</Link>
            </li>
            <li>
                <Link to="all-costs">All Costs</Link>
            </li>
        </div>
    )
}
