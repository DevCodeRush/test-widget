import useServiceHook from "../hooks/useService.hook";

const PitchTemplateGenerator = () => {
    const { data, loading, error } = useServiceHook('https://pitch-dev-96b3a.ue.r.appspot.com/api/internal/event-template/suggest')

    return (
        <div>
            {loading ? <span>Loading...</span> :
                (
                    <div>
                        <h1>{data.name}</h1>
                        <img src={data.eventDetails.downloadPhotoUrls[0]} alt={data.name}/>
                    </div>
                )
            }

        </div>
    )
}

export default PitchTemplateGenerator;
