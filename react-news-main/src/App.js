// import React from "react";
// import Navbar from "./Component/Navbar";
// import News from "./Component/News";
// import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />

//           <Routes>
//             <Route path="/">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="general" />
//             </Route>
//             <Route path="/business">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="business" />
//             </Route>
//             <Route path="/entertainment">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="entertainment" />
//             </Route>
//             <Route path="/general">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="general" />
//             </Route>
//             <Route path="/health">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="health" />
//             </Route>
//             <Route path="/science">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="science" />
//             </Route>
//             <Route path="/sports">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="sports" />
//             </Route>
//             <Route path="/technology">
//               <News this.setProgress ={this.setProgress} apikey={this.apikey}  pageSize={8} country="in" category="technology" />
//             </Route>
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
// export default App;

import "./App.css";

import React from 'react'
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
// import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 6;
  apikey=process.env.REACT_APP_NEWS_API
  // apikey="fe3756b87044464fa638642f23c38bd6"
  state = {
    progress: 0,
  };
  setProgress =(progress) =>{
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3}color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="general"
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="business"
                  country="in"
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="entertainment"
                  country="in"
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="general"
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="health"
                  country="in"
                  pageSize={this.pageSize}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="science"
                  country="in"
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="sports"
                  country="in"
                  pageSize={this.pageSize}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress ={this.setProgress} apikey={this.apikey} 
                  key="technology"
                  country="in"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>


    );

  }
}
// const App = ()=> {
// const pageSize = 5;
// const apiKey = process.env.REACT_APP_NEWS_API
// const [progress, this.setProgress] = useState(0)

// }

// export default App;
