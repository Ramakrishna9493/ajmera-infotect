import React, {useState} from "react";
import User from "../components/user/index";
import AddUser from "../components/addUser";
import { Layout, Switch } from 'antd';


import './App.css';
import 'antd/dist/antd.min.css';

const { Header, Content } = Layout;

const App = ()=> {
	const [mode, setMode] = useState(false)
	return (
		<Layout>
			<Header className="header" style={{backgroundColor: "grey"}}>
				<AddUser />
				<div style={{float: "right"}}>Mode: <Switch onClick={()=>setMode(!mode)}></Switch></div>

			</Header>
			<Content className={mode?"app-theme-dark": ""} style={{ padding: '0 250px' }}>
				<User mode={mode}/>	
			</Content>
		</Layout>
	);
}

export default App;
