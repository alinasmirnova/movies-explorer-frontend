import arrow from '../../../../images/arrow.svg';
import ExternalLink from '../../../ExternalLink';
import './SiteLink.css'

function SiteLink({to, children, underlined = true}) {
    return (
        <div className={`site-link ${underlined ? 'site-link_underlined' : ''}`}>
            <h4 className='site-link__title'>{children}</h4>
            <ExternalLink to={to} className='site-link__link'>
                <img className='site-link__arrow' src={arrow} alt={children} />
            </ExternalLink>
        </div>
    );
}

export default SiteLink;