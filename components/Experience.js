export default function Experience({experiencelist}) {
    return (
        <>
            <main className="experiencelist padmin col-12">
                <div className="padmin col-12">
                    {experiencelist.map(experience => (
                        <div className="card experiencecard" key={experience.id}>
                            {experience.image ? <img src={experience.image.url} class="card-img-top" alt={experience.image.alt} /> : null}
                            <div className="card-body">
                                <div className="row padmin col-12 experiencegroup " id={experience.company}>
                                    <div className="row padmin col-12 ">
                                        <div className="col-sm-12 col-lg-3 padmin">
                                            <div className="card mb-3 experience-sub-card border-0">
                                                <div className="card-header bg-primary text-white">{experience.company}</div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{experience.joblocation}</h5>
                                                    <p className="card-text">{experience.date_start} – {experience.date_end}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-9">
                                            <div className="padmin col-12 experiencetitle">{experience.jobtitle}</div>
                                            <div className="padmin col-12 experiencepoints">
                                                <ul className="padmin marmin">
                                                    {experience.highlights.map(({ index, icon, description }) =>
                                                        (<li key={index.toString()}>{description}</li>)
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}