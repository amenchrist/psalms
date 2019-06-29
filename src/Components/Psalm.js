import React from 'react';
import teevo from './teevo';

const Psalm = () => {
    return (
        <div>
            <main>
                <article className="bg-white">
                    <div className="vh-50 cover bg-center" style={{"backgroundImage": 'url(http://mrmrs.github.io/photos/001.jpg)'}}></div>
                    <div className="ph4 ph5-m ph6-l">
                        <div className="pv5 f4 f2-ns measure center">
                            <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">{teevo[0].title}</h1>
                            <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">{teevo[0].date}</p>
                        </div>
                        <div className="measure f3 center mv5 black-70">
                            <h1 className="fw6 f3 avenir">{teevo[0].author}</h1>
                            <p className="lh-copy measure f4 f3-ns black-70 baskerville">{teevo[0].body}</p>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default Psalm;