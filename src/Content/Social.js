import React, { Component } from 'react';
class Social extends Component {

    constructor(props)
{
super(props);
this.state={
'myskills':['C#','.NET CORE','REACTJS','REACT-NATIVE','AngularJS','FIREBASE','MYSQL']
};
}
render() {
return (
<div class="social">
<ul id="menu">
{this.state.myskills.map((value)=>{
return <li> {value} | </li>
})}
</ul>
</div>
)
}
}
export default Social