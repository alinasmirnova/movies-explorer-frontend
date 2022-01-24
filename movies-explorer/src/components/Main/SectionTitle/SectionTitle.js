import './SectionTitle.css'

function SectionTitle({ children }) {
    return (
        <div className='section-title'>
            <h2 className='section-title__text'>
                {children}
            </h2>
            <div className='section-title__line'/>
        </div>    
    )
}

export default SectionTitle;