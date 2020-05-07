import React from 'react';
import { useSpring, animated } from 'react-spring';

function Home() {
    const props = useSpring({ opacity: 1, backgroundColor:"green", from: { opacity: 1, backgroundColor: 'red' } });
        
    return (
        <div className="Home">
            <animated.h1 style={props}>Welcom to Auto Selection</animated.h1>
            {/* <h1>Welcom to Auto Selection</h1> */}
            <div className="descr">
                Here you can choose a good car according to available means, etc.
            </div>
        </div>
    )
}

export default Home;