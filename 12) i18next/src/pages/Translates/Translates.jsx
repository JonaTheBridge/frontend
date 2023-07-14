import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function Translates() {
  const { t } = useTranslation();

  useEffect(() => {
    changeLanguage('es-ES');
  }, []);

  return (
    <>
      <h1>{ t('hello') }</h1>
      <button onClick={ () => changeLanguage('es-ES') }>{ t('languages.spanish') }</button>
      <button onClick={ () => changeLanguage('en-US') }>{ t('languages.english') }</button>
      <button onClick={ () => changeLanguage('it-IT') }>{ t('languages.italian') }</button>
      <button onClick={ () => changeLanguage('fr-FR') }>{ t('languages.french') }</button>
      <button onClick={ () => changeLanguage('de-DE') }>{ t('languages.german') }</button>
    </>
  );
}

export default Translates;
