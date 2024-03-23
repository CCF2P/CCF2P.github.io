import './RemoveButton.css';


const RemoveButton = (props) =>
{
	return (
		<div className="Remove-button">
			<button id={props.id}>
				Удалить
			</button>
		</div>
	);
}

export default RemoveButton;