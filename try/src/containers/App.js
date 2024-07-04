import React, { useState, useEffect } from 'react';
import CardL from '../components/CardL'; // Ensure the name matches the actual component
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
 // Assuming you have some custom styles

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount]=useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
            console.log(count);
    }, [count]); // Empty dependency array ensures this runs only once after the initial render

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot =>
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return !robots.length ? (
        <h2 className="tc">LOADING!</h2>
    ) : (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardL robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;
