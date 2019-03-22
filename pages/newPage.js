import { Component } from "react";

export const meta = {
    title: "JavaScript Page",
    // The tags are used for SEO in the header property: `<meta name="keywords" content={stringOfAllPostTags} />`
    tags: ["tag-1", "tag-2"],
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false, // "If used it must be in 'YYYY-MM-DD format' like publishDate"
    seoDescription: "In this post I <keyword> with <keyword>. And blah blah.",
    exclude: false,
    hideProgressBar: false,
}

export default class Index extends Component {
    render() {
        return (
            <div>
                <p>
                    HELLO
                </p>
            </div>
        );
    }
}
