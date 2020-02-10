export default function Header({resumedata}) {
    // export default function Header({ objective, majorhighlights, punchline }) {
    return (
        <>
            <div className="header row ">
                <div className="profile ">
                    <div className="contactinfo ">
                        <span className="contactname">{resumedata.name}</span><br />
                        {resumedata.address} <br />
                        {resumedata.email}<br />
                        {resumedata.phone} <br />
                        <a href={`https://github.com/${resumedata.github}`}>GitHub Profile</a>
                    </div>
                    <div className="profilephoto ">
                        <img src="./profile-mug.JPG" className="headshot " alt={resumedata.headshot_alt} /><br />
                    </div>
                </div>
                <div className="objective row ">
                    <div className="col-sm-12 ">
                        <span className="title objectivetitle">Objective:
                        <span className="objectivetext">{resumedata.objective}</span>
                        </span>
                        <div className="row col col-sm-12 objectivesubgroup ">
                            <div className="objectivesubtitle col col-sm-3 col-md-12">{resumedata.punchline}</div>
                            <div className="objectivelistgroup ">
                                <ul className="objectivelist">
                                    {
                                        resumedata.majorhighlights.map(hi => (
                                            <li key={hi}>{hi}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumbgroup col-sm-12">
                        <div className="col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Developers</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Awesome Web Developers</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}