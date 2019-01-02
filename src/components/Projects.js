import React,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardText,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab: 0};
    }
    
toggleCategories(){

    if( this.state.activeTab === 0)
    {
        return(
           
            <div className="projects-grid">
                    {/*Project 1*/}
                   <Card shadow={5} style={{width: '450',margin: 'auto'}}>
                       <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                           React Project  #1
                       </CardTitle>
                        <CardText>
                        In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                        </CardText>
                        <CardActions border> 
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>       
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                   </Card>



                    {/*Project 2*/}
                    <Card shadow={5} style={{width: '450',margin: 'auto'}}>
                       <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                           React Project  #2
                       </CardTitle>
                        <CardText>
                        In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                        </CardText>
                        <CardActions border> 
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>       
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                   </Card>


                    {/*Project 3*/}
                    <Card shadow={5} style={{width: '450',margin: 'auto'}}>
                       <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                           React Project  #3
                       </CardTitle>
                        <CardText>
                        In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                        </CardText>
                        <CardActions border> 
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>       
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                   </Card>


            </div>
        );
    }
    else if(this.state.activeTab === 1)
    {
        return(
            <div className="projects-grid">
            {/*Project 1*/}
           <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://www.eblix.com.au/blog/wp-content/uploads/2017/01/1.png) center / cover'}}>
                   Angular Project  #1
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>



            {/*Project 2*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://www.eblix.com.au/blog/wp-content/uploads/2017/01/1.png) center / cover'}}>
               Angular Project  #2
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


            {/*Project 3*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://www.eblix.com.au/blog/wp-content/uploads/2017/01/1.png) center / cover'}}>
               Angular Project  #3
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


    </div>
        );
    }

    else if(this.state.activeTab === 2)
    {
        return(
            <div className="projects-grid">
            {/*Project 1*/}
           <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#000' , height: '176px', background: 'url(https://vuejs.org/images/logo.png) center / cover'}}>
                   Vue JS Project  #1
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>



            {/*Project 2*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#000' , height: '176px', background: 'url(https://vuejs.org/images/logo.png) center / cover'}}>
               Vue JS Project  #2
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


            {/*Project 3*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#000' , height: '176px', background: 'url(https://vuejs.org/images/logo.png) center / cover'}}>
               Vue JS Project  #3
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


    </div>
        );
    }
    else if(this.state.activeTab === 3)
    {
        return(
            <div className="projects-grid">
            {/*Project 1*/}
           <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://inteygrate.com/content/images/2016/04/mongodb.jpg) center / cover'}}>
                   MongoDB Project  #1
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>



            {/*Project 2*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://inteygrate.com/content/images/2016/04/mongodb.jpg) center / cover'}}>
               MongoDB Project  #2
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


            {/*Project 3*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#fff' , height: '176px', background: 'url(https://inteygrate.com/content/images/2016/04/mongodb.jpg) center / cover'}}>
               MongoDB Project  #3
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


    </div>
        );
    }
    else
    {
        return(
            <div className="projects-grid">
            {/*Project 1*/}
           <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#000' , height: '176px', background: 'url(https://rishabh.io/tech/nodejs/img/nodejs.png) center / cover'}}>
                   NodeJS Project  #1
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>



            {/*Project 2*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#000' , height: '176px', background: 'url(https://rishabh.io/tech/nodejs/img/nodejs.png) center / cover'}}>
               NodeJS Project  #2
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


            {/*Project 3*/}
            <Card shadow={5} style={{width: '450',margin: 'auto'}}>
               <CardTitle style={{color: '#000' , height: '176px', background: 'url(https://rishabh.io/tech/nodejs/img/nodejs.png) center / cover'}}>
               NodeJS Project  #3
               </CardTitle>
                <CardText>
                In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                </CardText>
                <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>       
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
           </Card>


    </div>
        );
    }

    

}

        render(){
        return(
            <div>
                <div className="category-tabs">
                     <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                        <Tab>
                            React 
                        </Tab>
                        <Tab>
                            Angular 
                        </Tab>
                        <Tab>
                            Vue JS 
                        </Tab>
                        <Tab>
                            MongoDB
                        </Tab>
                        <Tab>
                            Node JS 
                        </Tab>
                       
                        </Tabs>


                        <Grid>
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                        
                        
                  
                </div>
            </div>
        );
    }
}

export default Projects;