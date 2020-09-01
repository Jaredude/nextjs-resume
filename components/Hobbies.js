const FA = require('react-fontawesome');

export default function Hobbies(props) {
    const hobbies = props||[];
    return (
        <>
            <div className="row col col-12">
                <h5>Hobbies</h5>
            </div>
            <div className="row col col-12 aside">
                <table>
                    <tbody>
                        {hobbies.map(( { hobby, icon } ) => (
                            <tr key={hobby}><td>
                                <FA
                                    name={icon} 
                                /> 
                                <span className="hobbytitle">{hobby}</span>
                            </td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};