import React from 'react';
import '../css/App.css';
import { Routes, Route } from "react-router-dom";
import AuthContext from '../authContext'
import Home from "./home";
import Login from './login';
import Profile from './profile';
import Footer from './footer';
import OperationTemplateComponent from './operationTemplateComponent';
import RegressionLeft from './regressionLeft';
import RegressionRight from './regressionRight';
import DistributionLeft from './distributionLeft';
import DistributionRight from './distributionRight';
import DataPreprocessingLeft from './dataPreprocessingLeft';
import DataPreprocessingRight from './dataPreprocessingRight';
import ClusterizationLeft from './clusterizationLeft';
import ClusterizationRight from './clusterizationRight';
import Correlation from './correlation';

function First(props:any){
  console.log(props.data);
  props.setData(props.data+1)
}

function Second(props:any){
  console.log(props.data);
  props.setData(props.data+2)
}

function App() {

  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  return (
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/regression" element={ <OperationTemplateComponent title ={"Регрессия"} makeRequest={First} left ={<RegressionLeft key = {1}/> } right ={<RegressionRight key = {2}/> } />} />
          <Route path="/distribution" element={ <OperationTemplateComponent title ={"Распределение данных"} makeRequest={Second} left ={<DistributionLeft key = {1}/> } right ={<DistributionRight key = {2}/> } />} />
          <Route path="/data-preprocessing" element={ <OperationTemplateComponent title ={"Предварительная обработка данных"} makeRequest={First} left ={<DataPreprocessingLeft key = {1}/> } right ={<DataPreprocessingRight key = {2}/> } />} />
          <Route path="/clusterization" element={ <OperationTemplateComponent title ={"Кластеризация"} makeRequest={First} left ={<ClusterizationLeft key = {1}/> } right ={<ClusterizationRight key = {2}/> } />} />
          <Route path="/correlation" element={ <Correlation /> }/>
        </Routes>
        <Footer />
      </AuthContext.Provider>
    )
}

export default App;
