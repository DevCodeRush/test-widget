import { ReactComponent as StarFill } from './assests/star-fill.svg';
import { ReactComponent as StartEmpty } from './assests/star-empty.svg';

import './RatingStar.style.scss'

/**
 * Rating Stars component
 * @param {Object} props
 * @param {number} props.max
 * @param {number} props.current
 * @returns {JSX.Element}
 * @constructor
 */
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
            <div className="star filled" style={{width: sizePct}}>
                <StarFill />
            </div>
            <div className="star empty">
                <StartEmpty />
            </div>
        </span>))
    }</div>
}