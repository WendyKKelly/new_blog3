import React from "react";
import Link from "next/link";
import TagBlock from "./Tags";

export default function PostListing(props) {
    const { post, index } = props;
    return (
        <React.Fragment key={`post-list-${index}`}>
            <h2 key={`${post.name}-headline`}>
                <Link prefetch href={`/blog/${post.name}`}>
                    <a>{post.title}</a>
                </Link>

            </h2>
            <p key={`${post.name}-headline`}>
            {post.seoDescription}<h1></h1>     
            <Link prefetch href={`/blog/${post.name}`}><a>Read More...</a>
            </Link>
            </p>
            <TagBlock tags={post.tags} />
        </React.Fragment>
    );
}
