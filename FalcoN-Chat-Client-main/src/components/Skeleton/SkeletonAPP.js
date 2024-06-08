import React, { Component } from "react";
import "./Skeleton.css";
import Skeleton from "react-loading-skeleton";
class SkeletonAPP extends Component {
  render() {
    return (
      <div className="Skeleton">
        <div className="container">
          <div style={{ fontSize: 20, lineHeight: 2 }}>
            <h1 title="{Skeleton Text}">
              {this.props.title || <Skeleton duration={2} />}
            </h1>
          </div>
          <h2>Try Skeleton</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem unde itaque atque, ratione tenetur nulla a sit,
            doloremque dolorum pariatur rem id quae ducimus optio placeat
            excepturi quos assumenda illum. Nihil sit molestias labore, nam
            pariatur earum obcaecati accusantium tempore porro voluptatem!
            Aspernatur perferendis ipsa obcaecati est rerum eius accusamus sunt
            minus, iure ea architecto ullam. Aut nisi eaque numquam fuga quo
            quidem laboriosam hic maiores soluta tempore tenetur magnam,
            accusantium sit nam culpa reprehenderit suscipit maxime. Ab optio
            temporibus cum doloremque ducimus maiores, autem placeat error,
            consequatur quas, culpa facilis omnis aut dolor labore minus
            praesentium delectus numquam explicabo?
          </p>
        </div>
      </div>
    );
  }
}

export default SkeletonAPP;
