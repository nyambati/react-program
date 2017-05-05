import React, { Component } from 'react';
import { func, string, arrayOf } from 'prop-types';

export default function SelectLanguage(props) {
  let style = (lang) => {
    if (lang === selectedLanguage) {
      return { color: '#d0021b' }
    }
  }

  let { onSelect, languages, selectedLanguage } = props;

  return (
    <ul className='languages'>
      {languages.map(lang => {
        return (
          <li style={style(lang)} key={lang}
            onClick={onSelect.bind(null, lang)}
          >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  onSelect: func.isRequired,
  languages: arrayOf(string.isRequired),
  selectedLanguage: string.isRequired
};