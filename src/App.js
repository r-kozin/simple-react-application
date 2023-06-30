import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is a React Application!" />
      <Content color="red" text="This stuff is working" />
      <Content color="green" text="No problems now!" />
      <Footer />
    </>
  );
}

export default App;