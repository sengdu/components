import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	// this code will be written on 23 Jan 2021.
	// some other code.
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h2>Warning</h2>
				<p>Are you sure you want to do this?</p>
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author= "sam" time="today 4:30pm" imageUrl= {faker.image.imageUrl()}/>
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author= "seng" time="today 1:40pm"  imageUrl= {faker.image.imageUrl()}/>
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author= "Dudu" time="lastweek 4:30pm" imageUrl= {faker.image.imageUrl()}/>
			</ApprovalCard>
		
		</div>
	);
	
};

ReactDOM.render(
	<App />,
	document.querySelector("#root")
);