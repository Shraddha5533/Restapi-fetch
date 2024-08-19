import { useState, useEffect } from 'react';
import getPosts from './Fetchapi';
import getRandomUser from './RandomUser';
import './App.css';
import Postcard from './Postcard';
import UserCard from './UserCard';

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>

      {data ? (
        data.map((e) => <Postcard key={e.id} username={e.username} email={e.email} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
