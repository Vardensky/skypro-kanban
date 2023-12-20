import Card from "../Card/Card";

function Column({ name }) {
	return (
		<div className="main__column">
			<div className="column__title">
				<p>{name}</p>
			</div>
			<div className="cards">
				<Card name={"карточка"}
				theme={"Тема"}
				date={"30.08.23"}
				/>
				<Card name={"карточка2"}
				theme={"Тема2"}
				date={"23.01.24"}
				/>
			</div>
		</div>
	)
}

export default Column;