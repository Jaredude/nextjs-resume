export default function Profile(props) {
    return (
        <>
            <div className="row col col-12">
                <div className="col col-12">
                    <div className="contactinfo">
                        <img src="./profile-mug.JPG" className="headshot" alt={props.headshot_alt}/><br />
                        <span className="contactname">{props.name}</span><br />
                        {props.address} <br />
                        {props.email}<br />
                        {props.phone} <br />
                        <a href={`https://github.com/${props.github}`}>GitHub Profile</a>
                    </div>
                </div>
            </div>
        </>
    );
};

