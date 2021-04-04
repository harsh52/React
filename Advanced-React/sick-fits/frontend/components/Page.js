import PropTypes from 'prop-types';

export default function Page({ children, cool}){
    return(
        <div>
            <h2>
                I am the Page component
            </h2>
        </div>
    )
}

/*
Page.propTypes= {
    cool : PropTypes.string,
    children: PropTypes.oneOf([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
*/