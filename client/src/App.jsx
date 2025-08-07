import CreateEdit from './components/Create-edit';
import DeleteUser from './components/Delete-user';
import Footer from './components/Footer';
import Header from './components/Header'
import UserDetails from './components/User-details';
import UserList from './components/UserList';

function App() {

  return (
      <>
          <Header />
          <main className='main'>
              <UserList />

              {/* <!-- User details component  --> */}
              <UserDetails />

              {/* <!-- Create/Edit Form component  --> */}
              <CreateEdit />

              {/* <!-- Delete user component  --> */}
              <DeleteUser />
          </main>
          <Footer />
      </>
  );
}

export default App
