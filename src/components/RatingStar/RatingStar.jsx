import starFill from './assests/star-fill.svg';
import startEmpty from './assests/star-empty.svg';

import './RatingStar.style.scss'

export const RatingStar = (props) => {
    const { max, current } = props;

    const stars = Array.from({length: max}).map((_, index) => {
        const remain = current - index;
        const size =  remain > 1 ? 1 : remain;
        return {
            sizePct: `${size * 100}%`,
        }
    })

    return <div className="rating-container">{
        stars.map(({sizePct}, index) => (<span key={index} className="rating-star">
            <div className="star" style={{width: sizePct}}>
                <img src={starFill} alt="filled star"/>
            </div>
            <div className="star">
                <img src={startEmpty} alt="empty star"/>
            </div>
        </span>))
    }</div>
}