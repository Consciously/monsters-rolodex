import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				{
					name: 'Linda',
					id: '45u4w5u45u4u4hrth'
				},
				{
					name: 'Frank',
					id: 'wruw4u54wu547'
				},
				{
					name: 'Jacky',
					id: 'w45u45u45ui4u5u'
				},
				{
					name: 'Andrei',
					id: '45u54u45u45u45u'
				}
			]
		};
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map(monster => (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default App;
