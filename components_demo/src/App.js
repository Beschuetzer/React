import Comment from "./Comment";
import ApprovalCard from "./approvalCard"

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<Comment
					imgSrc="https://source.unsplash.com/random"
					date="01:10:42AM"
					text="Nice Job!"
					author="Sam"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					imgSrc="https://source.unsplash.com/random"
					date="11:14:54AM"
					text="I thoroughly enjoyed this."
					author="Vincent"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					imgSrc="https://source.unsplash.com/random"
					date="08:22:05AM"
					text="Heck ya!"
					author="Adam"
				/>
			</ApprovalCard>
		</div>
	);
};

export default App;
