import {useEffect, useMemo, useState} from "react";

import useServiceHook from "../hooks/useService.hook";
import { RatingStar } from "../RatingStar";

import { ReactComponent as HeartIcon} from "./icons/heart.svg";
import { ReactComponent as ChatIcon } from "./icons/chat.svg";
import "./PitchTemplateGenerator.style.scss";

const PitchTemplateGenerator = () => {
    const { data, loading, fetchData, error } = useServiceHook('https://pitch-dev-96b3a.ue.r.appspot.com/api/internal/event-template/suggest')
    const [generateCount, setGenerateCount] = useState(1)
    const categories = useMemo(() => {
        if (!data) return []
        return data.eventDetails.categories.map((category) => category.subCategory)
    }, [data?.eventDetails])

    const [showPopup, setShowPopup] = useState(false)

    const generate = async () => {
        setGenerateCount((current) => {
            return current+1;
        })
        if (generateCount >= 5) {
            setShowPopup(true)
            return;
        }
        await fetchData()
    }

    useEffect(() => {
        if (showPopup) {
            alert('done!')
        }
    }, [showPopup])

    return (
        <div>
            <div className="template-container">
                {loading ? <span>Loading...</span> :
                    (
                        <div className="template-wrapper">
                            <div className="template-card">
                                <div className="template-cover">
                                    <img src={data.eventDetails.downloadPhotoUrls[0]} alt={data.name}/>
                                    <div className="template-detail">
                                        <h1 className="title">{data.name}</h1>
                                        <RatingStar max={5} current={data.rating} />
                                    </div>
                                </div>
                                <div className="template-content">
                                    <p>{data.eventDetails.description}</p>
                                </div>
                                <div className="template-category-list">
                                    {
                                        categories.map((category) => <span key={category.name} className="template-category-item">{category.name} {category.emoji}</span>)
                                    }
                                </div>
                            </div>
                            <div className="template-action">
                                <button className="template-action-button">
                                    <HeartIcon /> I'm Interested</button>
                            </div>
                            <button className="template-generate-button" onClick={generate}>
                                <ChatIcon /> Next
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PitchTemplateGenerator;
