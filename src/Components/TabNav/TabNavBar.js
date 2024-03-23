import './TabNavBar.css';


const TabNavBar = () =>
{
  return (
		<div className="tab-nav">
			<a className="tab-link" href="#content-1">Виды героев "Dota 2"</a>
			<a className="tab-link" href="#content-2">Свойства</a>
			<a className="tab-link" href="#content-3">Возможные значения</a>
			<a className="tab-link" href="#content-4">Описание свойств вида</a>
			<a className="tab-link" href="#content-5">Значение для вида</a>
			<a className="tab-link tab-link-footer" href="#content-6">Проверка полноты знаний</a>
    </div>
	);
}

export default TabNavBar;