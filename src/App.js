import React from 'react';
import './App.css';

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.userId} {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
    const profile = this.props;
    console.log(profile);
  	return (
    	<div className="github-profile">
        <div className="info">
          <div className="firstname">{profile.firstName}</div>
          <div className="lastname">{profile.lastName}</div>
          <div className="age">{profile.age}</div>
          <div className="gender">{profile.gender}</div>
          <div className="dob">{profile.dob}</div>
          <div className="phonenumber">{profile.phoneNumber}</div>
          <div className="birthplace">{profile.birthplace}</div>
          <div className="status">{profile.status}</div>
        </div>
    	</div>
    );
  }
}


class Form extends React.Component{
  state = {userName: ''};
  handleSubmit = async (event)=>{
    event.preventDefault();
    
    const response = await fetch('https://lf88rlmmd0.execute-api.us-east-2.amazonaws.com/dev/dev?'+ new URLSearchParams({
      firstname : this.state.userName,
    }))

    const body = await response.json();
    const awsresponse = [body];
    this.props.onSubmit(awsresponse); // set bpdy here
    this.setState({userName: ''});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
        type = "text"
        value = {this.state.userName}
        onChange = {event=>this.setState({userName: event.target.value})}
        placeholder = "first name..."/>
        <button>Search</button>
      </form>
    );
  }
} 

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState=>({
  profiles: [...profileData],
  }));
};

	render() {
  	return (
    	<div>
    	  <div className="header">Search you Family Member by Name Here</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
        <img style={{display: "flex", height:200, width: 300, right: true, marginRight: "auto"}} className = "siteimage" src="https://www.phoenix.gov/eodsite/SiteAssets/Pages/Site-Under-Construction/website-construction-graphic-4.jpg" alt="new"/>
    	</div>
    );
  }	
}

export default App;
