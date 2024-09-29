import useServiceHook from "../hooks/useService.hook";

const PitchRandomProfile = () => {
    const { data, loading, error } = useServiceHook('https://pitch-dev-96b3a.ue.r.appspot.com/api/internal/profile/suggest?seenUsers=')
    return (
        <div className="profile-container">
            {loading ? <span>Loading...</span> :
                (
                    <div>
                        {JSON.stringify(data)}
                        {/*<h1>{data.name}</h1>*/}
                        {/*<img src={data.eventDetails.downloadPhotoUrls[0]} alt={data.name}/>*/}
                    </div>
                )
            }
        </div>
    )
}

export default PitchRandomProfile;
