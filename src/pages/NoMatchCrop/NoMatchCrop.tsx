import React, { FC } from 'react';
import './NoMatchCrop.scss';

interface NoMatchCropProps {}

const NoMatchCrop: FC<NoMatchCropProps> = () =>  (
    <>
        <p> No Matching Crop Found.</p>
    </>
);

export default NoMatchCrop;