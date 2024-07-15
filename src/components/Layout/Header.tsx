import { useLanguage } from '../../contexts/LanguageContext'
import { generalFormulaPageContent, homePageContent, whyPageContent } from '../../constants';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { pageTitle: homePageTitle } = homePageContent as any;
  const { pageTitle: whyPageTitle } = whyPageContent as any;
  const { pageTitle: generalFormulaPageTitle } = generalFormulaPageContent as any;
  return (
    <header>
      <nav>
        <span className='header-pre' />
        <span className='header-main'>
          <ul>
            <li><a href="/">{homePageTitle[language]}</a></li>
            <li><a href="/generalformula">{generalFormulaPageTitle[language]}</a></li>
            <li><a href="/why">{whyPageTitle[language]}</a></li>
          </ul>
        </span>
        <span className='header-end'>
          <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>{language}</button>
        </span>
      </nav>
    </header>
  )
}

export default Header