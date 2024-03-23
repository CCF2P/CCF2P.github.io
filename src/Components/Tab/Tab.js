import './Tab.css';

import TabNavBar from '../TabNav/TabNavBar';
import TypeOfDota2Heroes from '../TabContent/TypeOfDota2Heroes/TypeOfDota2Heroes';
import PropertiesDota2Heroes from '../TabContent/PropertiesDota2Heroes/PropertiesDota2Heroes';
import PossibleValues from '../TabContent/PossibleValues/PossibleValues';


const TabContent = (props) =>
{
	return (
		<div className="tab-content" id={"content-" + props.contentID}>
      <div className="content">
				{props.content}
			</div>
    </div>
	);
}


const Tab = () =>
{
  return (
		<div className="tab">
			<TabNavBar />
			
			<TabContent contentID={1} content={<TypeOfDota2Heroes />} />
			<TabContent contentID={2} content={<PropertiesDota2Heroes />}/>
			<TabContent contentID={3} content={<PossibleValues />}/>
			<TabContent contentID={4} />
			<TabContent contentID={5} />
			<TabContent contentID={6} />
		</div>
	);
}

export default Tab;