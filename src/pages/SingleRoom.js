import React  from 'react'; 
// import defaultbcg from "../images/room-1.jpeg"; 
// import Hero from "../compnents/Hero";
// import Banner from "../components/Banner";
// import {Link} from 'react-router-dom';
// import { RoomContext } from "../context";
export default class SingleRoom extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        // this.state={
        //    slug:this.props.match.params.slug,
        //     defaultbcg
        // };
    }
    // static contextType = RoomContext;
    //componentDidMount(){}    
    render() {
        // const {getRoom} = this.context;
        // const room =getRoom(this.state.slug);
        // console.log(room);
        return <div>hello from single room page</div>;
    }
}

