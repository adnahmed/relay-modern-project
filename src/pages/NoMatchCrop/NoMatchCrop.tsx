import React, { FC } from 'react';
import './NoMatchCrop.scss';

export interface NoMatchCropProps {}

const NoMatchCrop: FC<NoMatchCropProps> = () =>  (
    <>
        <p> No Matching Crop Found.</p>
    </>
);

export default NoMatchCrop;