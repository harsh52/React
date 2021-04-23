import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Testapi = () => {
    const [term, setterm] = useState('');
    const [results, setresults] = useState([]);

    //console.log(results.data)
    var authtoken = "123"
    var user = "tamil@sirpi.io"

    const tests = results.map(test => {
        console.log(test.projectID)
    })

    
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.post('http://95bbc9ab4541.ngrok.io/show_project',{authtoken,user},{
                params:{
                    /*action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',*/
                    //pr_title: term,
                },
            });
            setresults(data);
        };
        if(term){
            search()
        }
    }, [term])

    return (
        <div className = "ui form">
            <div className="field">
                <label>
                    Enter Search Term
                </label>
                <input
                value = {term}
                onChange={e => setterm(e.target.value)}
                className = "input"
                />
                <div>
                    <h2>
                        {results}
                    </h2>
                    {tests}
                </div>

            </div>
            
        </div>
    )
}

export default Testapi;