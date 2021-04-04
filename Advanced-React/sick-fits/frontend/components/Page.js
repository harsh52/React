import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';


const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: ''radnika_next;
        src: url('/static/'radnikanext-medium-webfont.woff2) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html{
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --lightGrey: #e1e1e1;
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px rgba(0,0,0,0.09)
    }

    *,*:before, *:after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height:2;

    }
    a{
        text-decoration: none;
        color: var(---black)
    }
    a:hover{
        text-decoration: underline;
    }
`;

export default function Page({ children, cool}){
    return(
        <div>
            <GlobalStyles/>
            <Header/>
            <h2>
                I am the Page component
            </h2>
            <h3>
                {cool}
            </h3>
            {children}
        </div>
    )
}


Page.propTypes= {
    cool : PropTypes.string,
    children: PropTypes.oneOf([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
