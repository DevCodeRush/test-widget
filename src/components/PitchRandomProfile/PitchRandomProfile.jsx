import useServiceHook from "../hooks/useService.hook";

const PitchRandomProfile = () => {
    const { data, loading, error } = useServiceHook('http://localhost:8080/api/internal/profile/suggest?seenUsers=')
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
