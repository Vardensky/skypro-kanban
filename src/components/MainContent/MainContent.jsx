import WithoutStatus from '../WithoutStatus/WithoutStatus'
import NeedToDo from '../NeedToDo/NeedToDo'
import InWork from '../InWork/InWork'
import Testing from '../Testing/Testing'
import Ready from '../Ready/Ready'


function MainContent() {
	return (
		<>
			<main className="main">
				<div className="container">
					<div className="main__block">
						<div className="main__content">
						<WithoutStatus /> 
						<NeedToDo />
						<InWork />
						<Testing />
						<Ready />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default MainContent;