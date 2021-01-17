import React from 'react'
import './style/page/page.css'
import aquaImg from '../img/aquaponic.jpg'
import scemeImg from "../img/aquaponics.png"
import nitrogen from "../img/nitrogen.jpg"
import nitro from "../img/nitro.png"
import Graph from './graph'
import fish2 from "../img/fish-2.png"
import fish3 from "../img/fish-3.png"
import fish4 from "../img/fish-4.png"
import fish5 from "../img/fish-5.png"
import Screen from "./screen"
import irlfish1 from "../img/irlfish1.jpg"
import irlplant from "../img/irlplant.jpg"
import solution from "../img/solution.jpg"
import fullsystem from "../img/fullsystem.jpg"

var bool = false
const text_data = ["children", "workers", "elderly", "everyone!"]

const sublist = ["nitrogen-cycle", "usfulness", "pro", "fishkeeping", "problem", "plant"]

class Page extends React.Component{
    typeWriter(text, i, fnCallback) {
        var self = this
        if (i < text.length) {
         document.getElementById("typetext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
          setTimeout(function() {
            self.typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 800);
        }
      }
       StartTextAnimation(i) {
           var self = this
         if (typeof text_data[i] == 'undefined'){
            setTimeout(function() {
              self.StartTextAnimation(0);
              return;
            }, 4000);
         }
         else if (i < text_data.length) {
         this.typeWriter(text_data[i], 0, function(){
           self.StartTextAnimation(i + 1);
         });
        }
      }

      move(){
        window.onload = function(){
          
          for(let i=0;i<sublist.length;i++){
            for(let j=0;j<2;j++){
              console.log(document.getElementsByClassName(sublist[i]+"-link")[j])
              if(document.getElementsByClassName(sublist[i]+"-link")[j]){
                document.getElementsByClassName(sublist[i]+"-link")[j].addEventListener("click", function(){
                  document.getElementById(sublist[i]).classList.add("right")
                })
              }
            }
          }
          for(let i=0;i<sublist.length;i++){
            document.getElementById(sublist[i]+"-unlink").addEventListener("click", function(){
              document.getElementById(sublist[i]).classList.remove("right")
            })}
        }
      }
    componentDidMount(){
      
        if(bool === false){
          bool = true
          this.StartTextAnimation(0)
        }
        this.move()
    }

    render(){
      if(this.props.name==="intro"){
          return(
            <div className="page" id={this.props.name}>
                <div>               

                    <h1 id="title">More food<br/>for&nbsp;<span id="typetext"> </span></h1>

                </div>
                <img src={fish2} id="fish-icon-1" className="fish"/>
                <img src={fish3} id="fish-icon-2" className="fish"/>
                <img src={fish4} id="fish-icon-3" className="fish"/>
                <img src={fish5} id="fish-icon-4" className="fish"/>
            </div>
        )
      }
      else if(this.props.name==="explanation"){
        return(
          <div className="page" id={this.props.name}>
            <Screen sname="nitrogen-cycle" img={nitrogen} num={0}/>
            <Screen sname="usfulness" img={nitro} num={1}/>
            <Screen sname="pro" img={aquaImg} num={2}/>
            <div className="text-explanation-div">
              <div className="text-explanation">
                <h1>How aquaponics works</h1>
                <div className="legend">1</div><p>&nbsp;The fish consume food and eject ammonia into the water via their feces.</p>
                <div className="legend">2</div><p>&nbsp;The water is filtered to avoid system blockages.</p>
                <div className="legend">3</div><p>&nbsp;The ammonia is digested by various bacteria which convert it into nitrites and finally, into nitrates.</p>
                <div className="legend">4</div><p>&nbsp;The filtered water returns back into the aquarium, where the cycle repeats.</p>
                

                <h3 className="link nitrogen-cycle-link">What is the nitrogen cycle? <i className="fa fa-chevron-right"></i></h3>
                <h3 className="link usfulness-link">How does this apply to aquaponics? <i className="fa fa-chevron-right"></i></h3>
                <h3 className="link pro-link">What are the advantages of this system over standard agriculture? <i className="fa fa-chevron-right"></i></h3>
              </div>
            </div>
            <div className="scemeImg-div"><img src={scemeImg} className="scemeImg"/></div>
          </div>
        )
      }
      else if(this.props.name==="experience"){
        return(
          <div className="page" id={this.props.name}>
            <Screen sname="fishkeeping" img={irlfish1} num={3}/>
            <Screen sname="problem" img={solution} num={4}/>
            <Screen sname="plant" img={irlplant} num={5}/>


              <div className="text-explanation-div">
                <div className="text-explanation">
                  <h1>My experience</h1>
                  <h2>Main details</h2>
                  <p>As my personal project, I have built a small scale aquaponic system and created
                     a website to inform people about its benefits. My setup
                      was composed of a 5 gallon aquarium, 5 goldfish, and 3 plant trays. To incorporate 
                      the plants to the aquarium, I simply used sink drain filters with some perlite instead of soil to then place
                      them inside the trays. Perlite are small volcanic rocks specially made for hydroponic systems which 
                      my dad introduced me to when I spoke about my intentions with this school project.
                  </p>
                  <h3 className="link fishkeeping-link">My experience keeping fish <i className="fa fa-chevron-right"></i></h3>
                  <h3 className="link problem-link">Problematic occurrences <i className="fa fa-chevron-right"></i></h3>
                  <h3 className="link plant-link">Plant keeping<i className="fa fa-chevron-right"></i></h3>
                  
                </div>
              </div>
              <div className="img-div">
                <img className="img" src={fullsystem}/>
              </div>
          </div>
        )
      }
      else if(this.props.name==="conclusion"){
        return(
          <div className="page" id={this.props.name}>
           
            <div className="text-explanation-div">
              <div className="text-explanation">
                <h1>Final results and future of the project</h1>
                <p>In conclusion, my aquaponic system was a success 
                  because I managed to grow a satisfying amount of produce 
                  from such a small system and maintained my goldfish healthy (except one, who sadly died). It presented many new challenges 
                  that I have never faced before and taught me to be cautious and to plan in advance.
                  Even though I have finished my personal project, 
                  I will try to keep this website updated from the upcoming difficulties and 
                  good experiences.


                </p>
                <h1>Credits</h1>
                <p><strong>Thank you to:</strong></p>
                <ul>
                  <li>My brother for helping me transfer and compile the code</li>
                  <li>My sister for providing me with ideas</li>
                  <li>My mother for being a constant source of motivation</li>
                  <li>My father for informing me about his similar experiences and proofreading</li>
                  <li>My project supervisor for pushing me to complete the project on a respectable schedule</li>
                </ul>
              </div>
            </div>
            <div id="text2">
              <div id="text2-">
                <h1>Bibliography</h1>
                <ul>
                  <li>One more Cast. <em>DIY AQUAPONICS System for 10 Gallon Fish Tank.</em> 2019.  
                  URL Addresses: 
                  &nbsp;<a target="_blank" className="link-source" href="https://www.youtube.com/watch?v=hKWREFjNWX4&ab_channel=OneMoreCast">https://www.youtube.com/watch?v=hKWREFjNWX4&ab_channel=OneMoreCast</a>,  &nbsp; 
                  &nbsp;<a target="_blank" className="link-source" href="https://www.youtube.com/watch?v=JJZcSHQFex8&feature=emb_logo&ab_channel=OneMoreCast">https://www.youtube.com/watch?v=JJZcSHQFex8&feature=emb_logo&ab_channel=OneMoreCast</a></li>
                  <li>Storey, Nate.<em> What are the best plants for aquaponics?.</em> 2014. URL Address: &nbsp;
                  &nbsp;<a target="_blank" className="link-source" href="https://www.youtube.com/watch?v=3EnvAW2--Yg&feature=emb_logo&ab_channel=ZipGrow">https://www.youtube.com/watch?v=3EnvAW2--Yg&feature=emb_logo&ab_channel=ZipGrow</a></li>
                  <li>Rocrick, Kimberly.<em> The Beginners Guide to Keeping Fish.</em> URL Address: 
                  &nbsp;<a target="_blank" className="link-source" href="https://www.thepetexpress.co.uk/blog/blog-new-products/the-beginners-guide-to-keeping-fish/">https://www.thepetexpress.co.uk/blog/blog-new-products/the-beginners-guide-to-keeping-fish/</a> </li>
                  <li>Aqueon. <em>How to fix cloudy water in a new fish tank.</em> 2017. URL Address: 
                  &nbsp;<a target="_blank" className="link-source" href="https://www.aqueon.com/articles/how-to-fix-cloudy-tank-water-for-a-new-fish-tank">https://www.aqueon.com/articles/how-to-fix-cloudy-tank-water-for-a-new-fish-tank</a> </li>
                  <li>Bernhard, Anne.<em> The nitrogen cycle: Processes, players and and human impact.</em> 2010. URL Address: 
                  &nbsp;<a target="_blank" className="link-source" href="https://www.nature.com/scitable/knowledge/library/the-nitrogen-cycle-processes-players-and-human-15644632/">https://www.nature.com/scitable/knowledge/library/the-nitrogen-cycle-processes-players-and-human-15644632/</a> </li>
                  <li>Woods, Audrey.<em> Pros and cons of aquaponics – Small garden ideas.</em> 2020. URL Address: 
                  &nbsp;<a target="_blank" className="link-source" href="https://smallgarden-ideas.com/pros-and-cons-of-aquaponics">https://smallgarden-ideas.com/pros-and-cons-of-aquaponics</a> </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }

    }
}

export default Page; 