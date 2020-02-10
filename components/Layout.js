export default function Layout(props) {
    return (
        <div className="container">
            <div className="row">
                {props.header}
            </div>
            <div className="row">
                <div className="col col-sm-12 col-md-9">
                    {props.experience}
                </div>
                <div className="col-sm-12 col-md-3">
                    {props.skills}
                    {props.hobbies}
                </div>
            </div>
        </div>
    );
}