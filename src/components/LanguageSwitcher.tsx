import React from 'react';
import { useTranslation } from 'next-i18next';
import { CSSProperties } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const styles: { [key: string]: CSSProperties } = {
    languageSwitcherContainer: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      zIndex: 1000 // Z-index does not need quotes
    },
    dropdown: {
      padding: '8px 16px',
      backgroundColor: '#f0f0f0',
      color: '#333',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.languageSwitcherContainer}>
      <select onChange={handleLanguageChange} value={i18n.language} style={styles.dropdown}>
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
