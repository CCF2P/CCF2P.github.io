import './AddButton.css';


const AddButton = (props) =>
{
	return (
		<div className="Add-button">
			<button id={props.id}>
				Добавить
			</button>
		</div>
	);
}

export default AddButton;