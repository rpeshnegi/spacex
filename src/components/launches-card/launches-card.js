import React from "react"
import IconArrow from "../../images/icon_arrow.png"

const LaunchesCard = (props) => {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="card launch-block" >
                <img src={props.details.links.mission_patch_small} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.details.mission_name} <strong> {props.details.launch_year} </strong> <span> {props.details.rocket.rocket_name} </span></h5>
                    <p className="card-text"> {props.details.launch_site.site_name_long} </p>
                </div>
                <a target="_blank" href={props.details.links.wikipedia} ><div className="card-footer"> <i> <img src={IconArrow} alt="" /> </i>  Go to Wikipedia Page </div></a>
            </div>
        </div>
    )
}

export default LaunchesCard
