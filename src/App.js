import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import styled from "styled-components";
import HomePag from "./components/HomePag";
import Cadastro from "./components/Cadastro";
import Hoje from "./components/Hoje";
import Habitos from "./components/Habitos";
import Historico from "./components/Historico";

function App() {
  const [todayhabits, setTodayHabits] =  React.useState([])
  const[habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({email:'' , password:''})
  const [dadosusuario, setDadosUsuario] =  React.useState({})
  const [habitdata, setHabitData] = React.useState({name:'', days:[]})
  const [listahabitos, setListaHabitos] = React.useState()
  const [qtddhabitos, setQtddHabitos] = React.useState()
  const [habitosfeitos, setHabitosFeitos] = React.useState([])
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePag habilitado={habilitado} setHabilitado={setHabilitado} login={login} setLogin={setLogin} dadosusuario={dadosusuario} setDadosUsuario={setDadosUsuario}></HomePag>}></Route>
    <Route path="/cadastro" element={<Cadastro habilitado={habilitado} setHabilitado={setHabilitado}></Cadastro>}></Route>
    <Route path="/hoje" element={<Hoje dadosusuario={dadosusuario} setDadosUsuario={setDadosUsuario} todayhabits={todayhabits} setTodayHabits={setTodayHabits} qtddhabitos={qtddhabitos} setQtddHabitos={setQtddHabitos} habitosfeitos={habitosfeitos} setHabitosFeitos={setHabitosFeitos} ></Hoje>}></Route>
    <Route path='/habitos' element ={<Habitos dadosusuario={dadosusuario} habitdata={habitdata} setHabitData={setHabitData} listahabitos={listahabitos} setListaHabitos={setListaHabitos} setTodayHabits={setTodayHabits} habitosfeitos={habitosfeitos} setHabitosFeitos={setHabitosFeitos} ></Habitos>}/>
    <Route path='/historico' element ={<Historico dadosusuario={dadosusuario} habitdata={habitdata} setHabitData={setHabitData} listahabitos={listahabitos} setListaHabitos={setListaHabitos} setTodayHabits={setTodayHabits} habitosfeitos={habitosfeitos} setHabitosFeitos={setHabitosFeitos}></Historico>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
