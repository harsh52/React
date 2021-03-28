import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search2 = () => {
    const [term, setterm] = useState('');
    const [results, setresults] = useState([]);

    console.log(results[0])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.post('http://127.0.0.1:3712/reverse',term,{
                params:{
                    /*action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',*/
                    str: term,
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
                </div>

            </div>
            
        </div>
    )
}

export default Search2;