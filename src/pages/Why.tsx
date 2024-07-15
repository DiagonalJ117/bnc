import { useLanguage } from '../contexts/LanguageContext';
import { whyPageContent } from '../constants';

const Why = () => {
  const { language } = useLanguage();
  const { pageDescription} = whyPageContent as any;
  return (
    <div className='why-page container'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmFNWxE3S1vQDsY9e3UdE2OjltjPytw_8gA&s' />
      <p>{pageDescription[language]}</p>
    </div>
  )
}

export default Why