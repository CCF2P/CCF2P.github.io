import './DropDownList.css';


const DropDownList = (props) =>
{
	return (
		<div className="drop-down-list">
			<select id={"drop-down-list-" + props.id} className="drop-down-list">
				<option>111111</option>
			</select>
		</div>
	);
}

export default DropDownList;