const UserCard = (props) => {
    console.log(props.data);
    return (
      <div className="usercard">
        
        <h3>{props.data.name.first}</h3>
        <h3>{props.data.phone}</h3>
        <h3>{props.data.location.city}, {props.data.location.state}</h3>
      </div>
    );
  };
  
  export default UserCard;
  