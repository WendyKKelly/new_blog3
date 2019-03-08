import { Component } from "react";

export const meta = {
    title: "Continuous Improvement",
    // The tags are used for SEO in the header property: `<meta name="keywords" content={stringOfAllPostTags} />`
    tags: ["tag-1", "tag-2"], 
    layout: "post",
    publishDate: "2019-03-07",
    modifiedDate: false, // "If used it must be in 'YYYY-MM-DD format' like publishDate"
    seoDescription: "Wow. Looking back on this long tail learning curve.",
    exclude: false,
    hideProgressBar: false,
}

export default class Index extends Component {
    render() {
        return (
            <div>
                <p>
                    It is important that all <code>meta</code> properties have values. Without them, your website will have poor SEO resulting in your content reaching fewer people.
                </p>
            </div>
        );
    }
}
