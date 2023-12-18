import WithoutStatus from '../WithoutStatus/WithoutStatus'
import NeedToDo from '../NeedToDo/NeedToDo'

function MainContent() {
	return (
		<>
			<main className="main">
				<div className="container">
					<div className="main__block">
						<div className="main__content">
						<WithoutStatus /> 
						<NeedToDo />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default MainContent;