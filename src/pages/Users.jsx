import { useState, useEffect } from "react";
import { Pagination, User } from "../components";
import ErrorBoundary from "../components/ErrorBoundaries";

function Users() {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  // get users from the randomuser api
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const result = await response.json();
      setUsers(result.results);
      // setLoading(false);
    };

    fetchUsers();
  }, []);

  // //   loading state
  // if (loading) {
  //   return <Spinner />;
  // }

  //   pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const numberOfPages = Math.ceil(users.length / usersPerPage);

  return (
    <section>
      <div>
        <h2>USERS PROFILE</h2>
      </div>
      <div>
        <ErrorBoundary>
          <User currentUsers={currentUsers} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Pagination
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </ErrorBoundary>
      </div>
    </section>
  );
}

export default Users;
