import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={8}> 
                        <h2>Malhar Tanksale</h2>
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avatar" style={{height: '200px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                    </Cell>
                    <Cell col={4}> 
                        <h2>
                            Contact Me
                        </h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem> 
                                <ListItemContent style={{fontSize: '20px', fontFamily:'Anton', color: '#000'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                           (+91) 9860674977
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily:'Anton', color: '#000'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                           tanksalemalhar@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily:'Anton', color: '#000'}}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                    malhar.tanksale
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily:'Anton', color: '#000'}}>
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                            malhar_0308
                                </ListItemContent>
                            </ListItem>
                            
                            </List>
                        </div>
                        
                    </Cell>
               </Grid>
            </div>
        );
    }
}

export default Contact;