import Conversations from './components/Conversations'
import Chat from './components/Chat'
import ProfileSidebar from './components/ProfileSidebar';

function App() {
  return (
    <div className="grid grid-cols-6">

      <ProfileSidebar></ProfileSidebar>
      <div className="col-span-5 grid grid-cols-2 bg-gray-200">
        <Conversations></Conversations>   
        <Chat></Chat>
      </div>

    </div>
  );
}

export default App;
