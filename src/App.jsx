import './App.css'
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import PopBrowse from './components/PopUp/PopBrowse';
import PopExit from './components/PopUp/PopExit';
import PopNewCard from './components/PopUp/PopNewCard';
import { useEffect, useState } from 'react';
import { cardList } from './data';


function App() {
	const [cards, setCards] = useState(cardList);
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(false)
		}, 2000)
	}, [])
	
	
	function addCard() {
		setCards([
			...cards,
			{
				id: cards.length + 1,
				theme: "Research",
				title: "Новая задача",
				date: "30.10.23",
				status: "Без статуса",
			}
		])
	}

	return (
		<Wrapper>
			<PopBrowse />
			<PopExit />
			<PopNewCard />
			<Header addCard={addCard}/>
			<MainContent isLoaded={isLoaded} cardList={cards} />
		</Wrapper>
	);

}


export default App;



