function Spa() {
    return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{id: 1, name:'Kel',email:'kel@mit.com',password:'s3cret',balance:18}]}}>
          <div className="container" style={{padding: "100px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );