import React, { FC } from 'react';
import './LocaleSelection.scss';
import SupportedLocales, { defaultValue } from "../../Models/SupportedLocales";
import Arrow from "../Icons/Arrow";

interface LocaleSelectionProps {
    currentValue?
}

const LocaleSelection: FC<LocaleSelectionProps> = (props) => {
      return (
      <div className="LocaleSelection">
          <div className="CurrentLocale">
              {props.currentValue || defaultValue}
          </div>
          <div className="SupportedLocales">
              {Object.keys(SupportedLocales).map(locale => {
                  return <option value={locale}>{SupportedLocales[locale]}</option>
              })}
          </div>
          <Arrow />
      </div>
      );
}

export default LocaleSelection;
