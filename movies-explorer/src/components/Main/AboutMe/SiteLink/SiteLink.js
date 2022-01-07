import arrow from '../../../../images/arrow.svg';
import './SiteLink.css'

function SiteLink({to, children, underlined = true}) {
    return (
        <div className={`site-link ${underlined ? 'site-link_underlined' : ''}`}>
            <h4 className='site-link__title'>{children}</h4>
            <a href={to} className='site-link__link' target="_blank" rel="noreferrer">
                <img className='site-link__arrow' src={arrow} alt={children} />
            </a>
        </div>
    );
}

export default SiteLink;