import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3010/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3010/delete/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  // Filter users based on search term
  const filteredUsers = data.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container-fluid'>
      <div className='d-flex vh-100 bg-primary align-items-center justify-content-center'>
        <div className='w-50 bg-white rounded p-3'>
          <h2 className="fs-1 fst-italic">User List</h2>
            <div className='d-flex justify-content-between align-items-center'>
                <input type="text" placeholder="Search by name..."  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <Link to="/adduser" className='btn btn-warning'>Create User</Link>
            </div>

          
          <table className='table table-hover table-responsive'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>

                  <td>
                    <Link to={`/view/${user.id}`} className='btn btn-sm btn-info'>View</Link>
                    <Link to={`/edit/${user.id}`} className="btn btn-sm btn-danger mx-3">Edit</Link>
                    <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-primary">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
