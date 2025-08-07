import Footer from './components/Footer';
import Header from './components/Header'
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';

function App() {

  return (
      <>
          <Header />
          <main className='main'>
              <UserList />

              {false && <UserDetails />}

              {/* {false && <CreateEdit/>}

              {false && <DeleteUser/>} */}
          </main>
          <Footer />
      </>
  );
}

export default App
