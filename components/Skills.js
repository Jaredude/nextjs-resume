export default function Skills(props) {
    const skills = props||[];
    return (
        <div className="row col col-12 aside">
            <table className="zebra">
                <tbody>
                    {skills.map(skill => (
                        <tr key={skill}><td>{skill}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};