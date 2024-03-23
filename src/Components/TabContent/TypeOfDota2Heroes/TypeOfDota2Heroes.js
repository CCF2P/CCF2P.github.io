import {HEROES} from '../../../DB/bd.js';
import './TypeOfDota2Heroes.css';

import RemoveButton from '../../Buttons/RemoveButton/RemoveButton.js';
import AddLabel from '../../Labels/AddLabel/AddLabel.js';


const TypeOfDota2Heroes = () =>
{
	return (
		<>
			<ul>
				{
					HEROES.map((item, i=0) => (
						<>
							<li className="hero-li" key={i}>
								<div className="text">{item["Имя"]}</div>
								<RemoveButton id={i++} />
							</li>
						</>
					))
				}
			</ul>
			<AddLabel placeholder={"Введите имя героя"}/>
		</>
	);
}

export default TypeOfDota2Heroes;