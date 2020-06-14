import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { BLOG_API } from '../../constants/BLOG_API';

const scss = require("./BlogPosts.scss");

function BlogPosts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(BLOG_API + '?per_page=6&_embed')
			.then(response => response.json())
			.then(posts => setPosts(posts))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="newsContainer">
			{posts.map((post, index) => (
				<div key={post.id} id={post.id} className="postContainer">
					<img className="featuredImg" src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post._embedded['wp:featuredmedia']['0'].alt_text} />
					<h3>{new Date(post.date).toLocaleDateString()}</h3>
					<h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
					<div className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
					<Link to={"/post/" + post.id} className="link">Les mer
					</Link>
				</div>
			))}
		</div> 
	);
};

export default BlogPosts;