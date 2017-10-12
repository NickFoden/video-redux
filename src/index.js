import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from'./components/search_bar';

const API_KEY = 'AIzaSyBBF51Ccf2N8WCSRTceuBb8lpUlsaFrGI8';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));