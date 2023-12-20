import './App.css'
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import PopBrowse from './components/PopUp/PopBrowse';
import PopExit from './components/PopUp/PopExit';
import PopNewCard from './components/PopUp/PopNewCard';



function App() {
	return (
		<Wrapper>
			<PopBrowse />
			<PopExit />
			<PopNewCard />
			<Header />
			<MainContent />
		</Wrapper>
	)
}

export default App;



