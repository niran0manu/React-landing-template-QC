import { Button } from '@material-ui/core'
import React from 'react'
import './MainSection.css'
import Product from './Product'



function MainSection() {
    return (
        <div className="main-section">
            <div className="main-section__background">
                <img src="https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt ="background"/>
                    <div className="main-section__info">
                    <h2>Quick Cash 💸💸💸</h2>
                    <h3>We provide Leverage for all your Quick decisions</h3>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy 
                        foster collaborative thinking to further the overall value proposition. 
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
                         a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User 
                         generated content in real-time will have multiple touchpoints for offshoring.Capitalize on low hanging fruit to identify
                          a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                           Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                           Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance
                            indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality
                             to derive convergence on cross-platform integration.
                    </p> 
                    <Button className="main-section__buttom" variant="contained" color="secondary">Ready to risk everything?</Button>  
                </div>
            </div>
            <div className="sub-section">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
            </div>
            
            
        </div>
    )
}

export default MainSection
