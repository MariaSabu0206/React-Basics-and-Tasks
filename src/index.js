import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reactbasics1 from './ReactBasics/usestate/Reactbasics1';
import UsestateTask1 from './ReactBasics/usestate/UsestateTask1';
import UsestateTask2 from './ReactBasics/usestate/UsestateTask2';
import './ReactBasics/react.css'
import UseEffectBsics_ from './ReactBasics/useeffect/UseEffectBsics_';
import UseEffectTask1 from './ReactBasics/useeffect/UseEffectTask1';
import Basics_1 from './ReactBasics/mapping/Basics_1';
import Task1 from './ReactBasics/mapping/Task1';
import Task2 from './ReactBasics/mapping/Task2';
import Task3 from './ReactBasics/mapping/Task3';
import Task4 from './ReactBasics/mapping/Task4';
import Basics1_props from './ReactBasics/Props/Basics1_props';
import Propschild from './ReactBasics/Props/Propschild';
import Singlepage from './Singlepage';
import Task from './Task';
import CardPropsTask from './CardPropsTask';
import CardpropsChild from './ReactBasics/CardpropsChild';
import Task1propschild from './ReactBasics/Props/Task1propschild';
import TernaryBasic from './ReactBasics/Ternary operator/TernaryBasic';
import FormBackgrndTask from './FormBackgrndTask';
import StatusTableTask from './ReactBasics/StatusTableTask';
import UseContest_basics from './ReactBasics/UseContext/UseContest_basics';
import Task1UseContext from './ReactBasics/UseContext/Task1UseContext';
import Task1Main from './ReactBasics/UseContext/Task1Main';
import DataGettingBasics1 from './ReactBasics/FormDataGetting.jsx/DataGettingBasics1';
import APIintegrationBasics1 from './ReactBasics/API Integration/APIintegrationBasics1';
import Rating_apiIntegration from './ReactBasics/API Integration/Rating_apiIntegration';
import Reduxtoolkit from './ReactBasics/Redux/Reduxtoolkit';
import { store } from './ReactBasics/Redux/Store';
import { Provider } from 'react-redux'
import { Counter } from './ReactBasics/Redux/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    {/* <Reactbasics1/> */}
    {/* <UsestateTask1/> */}
    {/* <UsestateTask2/> */}
    {/* <UseEffectBsics_/> */}
    {/* <UseEffectTask1/> */}
    {/* <Basics_1/> */}
    {/* <Task1/> */}
    {/* <Task2/> */}
    {/* <Task3/> */}
    {/* <Task4/> */}
    {/* <Basics1_props/> */}
    {/* <Propschild/> */}
    {/* <Task1props/> */}
    {/* <Singlepage/> */}
    {/* <Task/>  */}
    {/* <CardpropsChild/> */}
    {/* <Task1propschild/> */}
    {/* <TernaryBasic/> */}
    <FormBackgrndTask/>
    {/* <StatusTableTask/> */}
    {/* <UseContest_basics/> */} 
    {/* <Task1UseContext/> */}
    {/* <Task1Main/> */}
    {/* <DataGettingBasics1/> */}
    {/* <APIintegrationBasics1/> */}
    {/* <Rating_apiIntegration/> */}
    {/* <Reduxtoolkit/> */}
    {/* <Provider store={store}>
        <Counter/>
    </Provider>, */}
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
