import React from 'react';

import {Social, Name, Link} from './styled_components';
<<<<<<< HEAD

import
  {
    facebook, 
    twitter, 
    github, 
    instagram, 
    medium, 
    heart, 
    fb_profile, 
    git_profile,
    tw_profile, 
    ins_profile, 
    med_profile
  }
=======
import
{facebook, twitter, github, instagram, medium, heart, fb_profile, git_profile,
tw_profile, ins_profile, med_profile}
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55
from './components/utility';

const style = {
  widht: "50px",
  height: "32px"
}

let Sharing = () => {
  return (
    <div>
      <Social>
        <Link href={git_profile} target="_blank">
          <img style={style} src={github} />
        </Link>
        <Link href={fb_profile} target="_blank">
          <img style={style} src={facebook}/>
        </Link>
        <Link href={tw_profile} target="_blank">
          <img style={style} src={twitter}/>
        </Link>
        <Link href={ins_profile} target="_blank">
          <img style={style} src={instagram}/>
        </Link>
        <Link href={med_profile} target="_blank">
          <img style={style} src={medium}/>
        </Link>
      </Social>
      <Name>
        &lt;&gt; with &nbsp;
        <img style={style} src={heart}/>&nbsp;
        by &nbsp;<strong>Nitin Tulswani</strong>
      </Name>
    </div>
  );
}

export default Sharing;
