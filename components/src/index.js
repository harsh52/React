//import the React and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommonDetail from './CommonDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard >
                <CommonDetail
                    author="sam"
                    timeago="Todat at 3:30"
                    />
            </ApprovalCard>
            <ApprovalCard >
                <CommonDetail
                    author="rob"
                    timeago="Todat at 4:30"
                    />
            </ApprovalCard>
            <ApprovalCard >
                <CommonDetail
                    author="cat"
                    timeago="Todat at 6:30"
                />
            </ApprovalCard>
        </div>
    );
};

//Take a eact component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);