import './AddLabel.css';

import AddButton from '../../Buttons/AddButton/AddButton.js';


const AddLabel = (props) =>
{
	return (
		<div className="Tab-content-footer">
			<div className="Add-label">
				<input placeholder={props.placeholder} />
			</div>
			<AddButton />
		</div>
	);
}

export default AddLabel;