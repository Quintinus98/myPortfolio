import {
	indicelsolar,
	gpt3,
	mystore,
	s3webhosting,
	EBSdeploy,
	serverless
} from '../assets/images'

const items = [
	{
		key: "1",
		src: `${gpt3}`,
		title: "GPT-3",
		link: "https://gpt3-quentin.netlify.app",
	},
	{
		key: "2",
		src:`${mystore}`,
		title: "My Store",
		link: "https://buy4him.netlify.app",
	},
	{
		key: "3",
		src:`${indicelsolar}`,
		title: "Indicel Solar",
		link: "http://indicelsolar.com",
	},
	{
		key: "4",
		src:`${EBSdeploy}`,
		title: "Deploying with Amazon EBS",
		link: "",
	},
	{
		key: "5",
		src:`${s3webhosting}`,
		title: "S3 Static Web Hosting",
		link: "",
	},
	{
		key: "6",
		src:`${serverless}`,
		title: "Todo Serverless App",
		link: "",
	},
]

export default items;