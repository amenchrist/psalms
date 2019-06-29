import React from 'react';
import Result from './Result'

const ResultsList = (props) => {
    //console.log('resultsList', props);
    const results = props.list.map((psalmsObject, i) => { /*console.log('resultsmap', psalmsObject, i);*/
        return <Result title={psalmsObject.title} body={psalmsObject.body} author={psalmsObject.author} key={Math.random()*i}/>
    })
    //console.log('results', results);
       

    let style = {
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "100%",
        display: props.display
      };
    return (
        <div style={style}>
            <section className="mw7 center avenir">
                {results}
            </section>
        </div>
    );
}

export default ResultsList;