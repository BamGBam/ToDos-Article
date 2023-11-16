
import React from "react";
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic'
import Navbar from '@/components/Navbar';
import Model from '@/components/Model'
const TodoApp = () => {
    return (
    <React.Fragment>
        {/* <Header/>
        <TodosLogic/> */}
        <Navbar/>
        <Model/>

   </React.Fragment>
    );
  };
  export default TodoApp;
  

  