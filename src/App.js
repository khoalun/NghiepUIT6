import React, { Children, Component } from "react";
import Header from './components/Header';
import Product from './components/Product';
import './App.css';
class App extends Component {
  render() { 
   return (
     <div>
       <nav className="navbar navbar-inverse">
         <a className="navbar-brand">Title</a>
         <ul className="nav navbar-nav">
           <li className="active">
             <a>Home</a>
           </li>
           <li>
             <a>Link</a>
           </li>
         </ul>
       </nav>
       <div className="container">
         <div className="row">
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <div className="panel panel-default">
               <div className="panel-body">Basic panel example</div>
               <div className="panel panel-default">
                 {/* Default panel contents */}
                 <div className="panel-heading">Panel heading</div>
                 <div className="panel-body">
                   <p>Text goes here...</p>
                 </div>
                 {/* Table */}
                 <table className="table">
                   <thead>
                     <tr>
                       <th>Heading 1</th>
                     </tr>
                     <tr>
                       <th>Heading 2</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>Content 1</td>
                     </tr>
                     <tr>
                       <td>Content 2</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );

    
    
    
   
    
  }
}


export default App;
