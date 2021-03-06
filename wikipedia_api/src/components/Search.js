import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {
    const [term, setterm] = useState('');
    const [results, setresults] = useState([]);

    console.log(results)

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
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

            </div>
            
        </div>
    )
}

export default Search;