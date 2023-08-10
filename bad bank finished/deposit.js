function Deposit() {
  const [status, setStatus]     = React.useState('');

    //const ctx = React.useContext(UserContext);
  
    function handle() {
        //ctx.users.push({name: data.name, deposit: data.deposit});
        return true;
    }
  
    return (
        <Card
          bgcolor="primary"
          header="Deposit"
          status={status}
          deposit={handle}
          submitButtonDeposit="Deposit Successful"
        />
    )
  }