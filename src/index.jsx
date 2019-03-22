import React from "react";

export default class extends React.Component {
  static async getInitialProps() {
    // Grab the images from the backend.
    const results = await fetch("/images").then(resp => resp.json());
    return { results };
  }

  render() {
    // Render them onto the page.
    return (
        <div id="images">
            <h1>Featured Images from Wikipedia</h1>
            {this.props.results.map((result) => {
                return (
                    <div key={result.guid}>
                        <div dangerouslySetInnerHTML={{__html: result.content}}></div>
                        <br/>
                    </div>
                );
            })}
        </div>
    );
  }
}