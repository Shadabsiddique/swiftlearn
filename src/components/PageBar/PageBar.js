import React from "react";


const PageBar = ({data=[]}) => {
    return (
        <div className="third-head">
            {data.map(item=><div>{item}</div>)}
        </div>
    );
}

export default PageBar;