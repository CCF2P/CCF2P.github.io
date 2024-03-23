import {PROPERTIES} from '../../../DB/bd.js';
import './PropertiesDota2Heroes.css';

import RemoveButton from '../../Buttons/RemoveButton/RemoveButton.js';
import AddLabel from '../../Labels/AddLabel/AddLabel.js';


const PropertiesDota2Heroes = () =>
{
	return (
		<>
			<ul>
				{
					PROPERTIES.map((item, i=0) => (
						<>
							<li className="property-li" key={i}>
								<div className="text">{item["Name"]}</div>
								<RemoveButton id={i++} />
							</li>
						</>
					))
				}
			</ul>
			<AddLabel placeholder={"Введите название свойства героя"}/>
		</>
	);
}

export default PropertiesDota2Heroes;