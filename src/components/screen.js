import React from "react"
import './style/page/page.css'

 
const textlist = [
    <div>
<div className="chevron-parent" id="nitrogen-cycle-unlink"><i className="fa fa-chevron-left"></i></div>
<div className="text-page">
    <div className="text">
    <h1>Nitrogen Cycle</h1>
    <strong><p>The nitrogen cycle is a crucial part of life on Earth. It it separated in these following steps:
    </p>
    <ol>
        <li>Nitrification</li>
        <li>Assimilation</li>
        <li>Ammonification</li>
        <li>Denitrification</li>
    </ol></strong>
    <h2>1. Nitrification</h2>
    <p>Nitrification is <strong>the transformation of ammonia 
        into nitrites</strong>. This is done through decomposition by various bacteria with the following
        chemical formulae: <br/><br/>
        {/* 2NH4+ + 3O2 → 2NO2– + 4H+ + 2H2O */}
        <strong>2NH<sub>4</sub> + 3O<sub>2</sub> <i className="fa fa-arrow-right"></i> 2NO<sub>2</sub><sup>-</sup> + 4H<sup>+</sup> + 2H<sub>2</sub>O</strong><br/>
        {/* 2NO2– + O2 → 2NO3– */}
        <strong>2NO<sub>2</sub><sup>-</sup> + O<sub>2</sub> &nbsp;<i className="fa fa-arrow-right"></i> 2NO<sub>3</sub><sup>-</sup></strong>
    </p>
    <h2>2. Assimilation</h2>
    <p>Plants <strong>absorb the available nitrogen</strong>, particularly nitrates in order to grow. Animals get it by either eating plants or eating other animals.</p>
    <h2>3. Ammonification</h2>
    <p>Whenever a plant or animal dies, <strong>the nitrogen within their 
        system gets released back into nature and gets decomposed into ammonia</strong> by various fungi and bacteria.</p>
    <h2>4. Denitrification</h2>
    <p><strong>Nitrites present in the soil are turned into gaseous nitrogen and oxygen</strong>. Various species use this in order to have a supply of oxygen.</p>
    <p>Image credits: https://www.nature.com/scitable/content/ne
        0000/ne0000/ne0000/ne0000/1567354
        1/f1_bernhard.jpg</p>
    <br/>
    <h3 className="link usfulness-link">How does this apply to aquaponics? <i className="fa fa-chevron-right"></i></h3>
    </div>
</div>
</div>, <div>
<div className="chevron-parent" id="usfulness-unlink"><i className="fa fa-chevron-left"></i></div>
<div className="text-page">
    <div className="text no-column">
    <h1>How the nitrogen cycle works in aquaponics</h1>
    <p><strong>In aquaponic systems, the nitrogen cycle behaves similarly to how it does in nature
        with fish, plants, and bacteria.</strong></p>
    <ol>
        <li>The fish excrete ammonia into the water.</li>
        <li>Nitrosomonas, a type of bacteria, digests ammonia into nitrites.</li>
        <li>The nitrites then get digested once again by a species of bacteria named nitrospira, turning them into nitrates.</li>
        <li>The plants absorb the nitrates in the water, one of its essential nutrients.</li>
    </ol><br/>
    <h3 className="link pro-link">What are the advantages of this system over standard agriculture? <i className="fa fa-chevron-right"></i></h3>
    </div>
</div>
</div>,
<div>
<div className="chevron-parent" id="pro-unlink"><i className="fa fa-chevron-left"></i></div>
<div className="text-page">
    <div className="text">
    <h1>The advantages of aquaponics</h1>
    <h2>Less water consumption</h2>
    <p>Surprisingly, <strong>aquaponics uses about 90% less water than conventional farming</strong>.
        This is because the water present in the system has a much lower surface area,
        so less is lost from evaporation.<br/>
        Source: <a target="_blank" className="source-link" rel="noopener noreferrer" href="https://smallgarden-ideas.com/pros-and-cons-of-aquaponics">https://smallgarden-ideas.com/pros-and-cons-of-aquaponics</a>

    </p>
    <h2>Faster plant growth</h2>
    <p>Growing plants in water instead of soil <strong>can speed up their growth
        twofold</strong>. It is easier for them to absorb nutrients from water
        than it is from soil.
    </p>
    <h2>No use of pesticides</h2>
    <p>Because aquaponic systems are generally interior, <strong>pests such as weeds or bugs are much less common than in conventional farming</strong>.
        Therefore, <strong>the use of pesticides is not needed</strong>.
    </p>
    <h2>Conclusion: Highly efficient</h2>
    <p>With this list of advantages, we can deduce that aquaponics is an 
        <strong> efficient way of growing food, does not contaminate, and uses
        much less water</strong>; making it a good environmental choice.
    </p>
    <p>Image credits: https://www.innovationnewsnetwork.com/wp-content/uploads/2020/02/Aquaponics-696x392.jpg</p>
    </div>
</div>
</div>
, 
<div className="text-page">
<div className="chevron-parent" id="fishkeeping-unlink"><i className="fa fa-chevron-left"></i></div>
    <div className="text no-column">
    <h1>My experience keeping fish</h1>
    <h2>Maintenance</h2>
    <p>Maintaining the fish was harder compared to keeping other pets.
        Because I have already kept hamsters and dogs in the past, I can guarantee that fish keeping was the hardest of them all.
        The parts that were the most worrying were: 
    </p>
    <ul>
        <li>Maintaining the water quality high;</li>
        <li>Not overfeeding them as that can cause rot and poison the fish; and</li>
        <li>Cleaning the tank in general (transfering fish, gravel cleaning, filter cleaning).</li>
    </ul>
    <p>Other than that, fish keeping was an enjoyable experience.</p>
    <h2>Fun parts</h2>
    <p>Observing fish behaviour is interesting, as you get to learn patterns and turn them into indicators of things such as poor water quality.</p>
    <p>Watching them eat is rather entertaining.</p><br/>
    <h3 className="link problem-link">Problematic occurrences <i className="fa fa-chevron-right"></i></h3>

    </div>
</div>
,
<div className="text-page">
<div className="chevron-parent" id="problem-unlink"><i className="fa fa-chevron-left"></i></div>
    <div className="text no-column">
    <h1>Problematic occurrences</h1>
    <h2>Fish jumping out</h2>
    <p>One morning, when my mother was going to wake me up, she noticed that a fish was missing from 
    the aquarium. As she walked out, mom realised that she was stepping on it the whole time, spreading the
    insides of the fish onto the floor. It seems that the fish jumped out and then my mother, not seeing it ended up crushing it.
    My solution, so that never happens again, was to block the surface with a plant tray.
    </p>
    <h2>Cloudy water</h2>
    <p>Approximately every week, the water of my aquarium became cloudy, making me worried at first.
        I decided to research it and discovered that it signifies the proliferation of bacteria in most cases.
    </p>

    <h2>Algae</h2>
    <p>Over the course the month, algae has started to develop on the perlite of the plants.
        Because this is the current state of things, I do not know whether that can harm the fish or the plants.

    </p><br/>
    <h3 className="link plant-link">Plant keeping<i className="fa fa-chevron-right"></i></h3>
    <p></p>
    </div>
</div>
,
<div className="text-page">
<div className="chevron-parent" id="plant-unlink"><i className="fa fa-chevron-left"></i></div>
    <div className="text no-column">
    <h1>Keeping plants</h1>
    <h2>Plant type</h2>
    <p>I chose to grow green onion, because they have convenient roots, and their growth is easy to measure with their straight shape.
        With this project, I wanted to grow flavouring or spices as they are more expensive on the market.
        Green onion was accessible, as my mother had some from the grocery store. I just cut the top off and placed it in my aquaponic system.
    </p>
    <h2>Plant maintenance</h2>
    <p>Compared to growing in soil, there is almost no maintenance required for the plants. The only action I have done in a month
        was rincing the trays and replacing the perlite the plants were growing in.
    </p>
    <h2>Production</h2>
    <p>Growth was much faster than I thought, growing 14 strands of green onion over the course of a month.
        Other than that, after incorporating the plants into the aquarium, their roots quickly grew to over 10cm long, reaching
         in all directions.
    </p>
    <h2>Perlite</h2>
    <p>In the image to the right, you can see some white rocks that the plants are growing in. That is called perlite,
        and it is made for hydroponic systems. I decided to incorporate this into my system because hydroponic and aquaponic systems
        share the concept of feeding plants with fertilized water.
    </p>
    </div>
</div>
]
let stuff


class Screen extends React.Component{
    
    componentDidMount(){
        
    }
    render(){

        console.log(stuff)
        return(
            <div id={this.props.sname}>
                { textlist[this.props.num] }
                <div className="img-page">
                    <img className="img" src={this.props.img} alt="background" />
                </div>
            </div>
        )
    }
}

export default Screen;