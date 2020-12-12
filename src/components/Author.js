import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Author extends Component {
    render() {
        return (
            <div>
                <h1>Freudorovich</h1>
                <img src="https://pymstatic.com/8870/conversions/lev-vygotsky-biografia-wide.jpg" alt=""/>
                <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit, leo at velit ridiculus dis lacinia molestie enim, odio natoque pulvinar arcu potenti ultrices. Ac dis at cras sociis nisi habitant eu morbi, venenatis consequat nulla senectus risus lacus quisque aliquam, in arcu cursus tempor eros lectus sem. Tortor suspendisse nam sodales vitae leo proin nisi dapibus cras, orci interdum sem eget enim arcu viverra. Pulvinar viverra ultricies mi commodo fermentum, neque ultrices vehicula netus, eu cum fusce ridiculus.<br></br>

                    Dictumst porta ligula interdum felis sapien bibendum est habitant conubia, vivamus consequat blandit nibh faucibus egestas urna scelerisque, litora ultrices maecenas nostra tempor pulvinar nisl dignissim. Venenatis mattis conubia mauris lobortis nunc eget metus integer, magna donec ultricies interdum aenean condimentum nostra sodales, sed cras vestibulum curae egestas fringilla quis.<br></br>

                    Ad justo urna quisque lectus phasellus tellus ut eros dis, etiam mus himenaeos ultrices cras interdum nisl curae taciti, leo mattis nascetur vel habitasse sollicitudin malesuada curabitur. Varius proin semper ultrices senectus eleifend viverra quis nascetur duis sed, praesent egestas arcu taciti dictumst dictum magnis litora aliquam, enim porta aenean cras nullam ut vehicula ad mollis. Ridiculus nam justo magna integer at dignissim parturient malesuada eros, urna himenaeos dapibus mus nostra nascetur diam mauris.</h3>
            
            <Link to="/">
              Back to Home
            </Link> 
                 
            </div>
        )
    }
}

export default Author