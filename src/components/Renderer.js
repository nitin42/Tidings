import React from 'react';
import ReactDelayRender from 'react-delay-render';
import moment from 'moment-timezone';
import ProgressiveImage from 'react-progressive-image';

import {Content, Image} from '../styled_components';

const style = {
  height: "250px",
  widht: "300px"
};

let Renderer = (props) => {
  const renderNews = props.headlines.map((item, i) => {
    return (
      <ReactDelayRender wait="10" key={props.headlines.indexOf(item)}>
        <a href={item["url"]} target="_blank">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">{item["title"]}&nbsp;&nbsp;</p><hr/>

                {
                  item["publishedAt"] === null ? null :
                  <span className="tag is-light">
                    {
                      moment(item["publishedAt"]).tz('Asia/Kolkata').format('ha z')
                    }
                  </span>
                }

                &nbsp;&nbsp;

                {
                  item["author"] === null ? null :
                  <span className="tag is-dark">{item["author"]}</span>
                }

                <br/><br/>

                {
                  item["urlToImage"] === null ? null :
                  <Image>
                    <ProgressiveImage src={item["urlToImage"]}
                      placeholder="http://consortia.net/assets/img/loading.gif">
                      {
                        (image) =>
                          <img
                            style={style}
                            src={image}
                            className="w3-border w3-padding-4 w3-padding-tiny"
                            alt='an image'
                          />
                      }
                    </ProgressiveImage>
                  </Image>
                }

            </article>
          </div>
        </a>
      </ReactDelayRender>
    );
  });

  return (
    <Content>
      <div className="tile is-ancestor">
        <div className="title is-6">
          {renderNews}
        </div>
      </div>
    </Content>
  );
}

export default Renderer;
