const uid = () => crypto.randomUUID();

const siteData = {
	main: {
		title: 'Zakaria Slimane | Software Developer DevOps & Cloud',
		offTitle: 'Zakaria Slimane | Software Developer DevOps & Cloud',
		name: 'Zakaria Slimane',
		email: 'slzackaria@gmail.com',
	},
	socials: {
		github: 'https://github.com/slzakaria',
		linkedin: 'https://www.linkedin.com/in/zakaria-slimane/',
		resume: 'https://drive.google.com/file/d/1Ybyhe-cHJ2Cv_Cm52JRbgZNggO62tDrj/view?usp=sharing',
		email: 'slzackaria@gmail.com',
	},

	contactPage: {
		title: "Get in Touch: Let's Turn Ideas into Reality",
		description:
			'Thank you for taking the time to explore my work and learn more about my passion for web development and creating digital experiences.',
		cta: "If you're excited about the possibilities, have questions, or are ready to collaborate, I'd love to hear from you!",
	},

	articles: [
		{
			id: uid(),
			title: 'How to deploy a static website / app in AWS.',
			link: 'https://www.linkedin.com/pulse/how-deploy-static-website-react-app-aws-zakaria-slimane--vku9e/',
		},
		{
			id: uid(),
			title: 'Jenkins DevOps: EC2 Automated Builds and Docker Deployments',
			link: 'https://www.linkedin.com/pulse/jenkins-devops-ec2-automated-builds-docker-zackaria-slimane--o59re/',
		},
		{
			id: uid(),
			title: 'Automating Infrastructure Deployment with Terraform (AWS)',
			link: 'https://www.linkedin.com/pulse/automating-infrastructure-deployment-terraform-aws-example-slimane--ei0ze/',
		},
		{
			id: uid(),
			title: 'AWS EC2 Instance Setup and Secure CI/CD Pipeline with Jenkins',
			link: 'https://www.linkedin.com/pulse/brief-overview-aws-ec2-instance-setup-secure-cicd-jenkins-slimane--3t3oe/',
		},
		{
			id: uid(),
			title: 'GitHub Issues Tracker with Go, React, and Docker',
			link: 'https://www.linkedin.com/pulse/learning-golang-hands-github-issues-tracker-go-react-docker-slimane-/',
		},
		{
			id: uid(),
			title: 'Building Your First CRUD App in Go: A Hands-On Tutorial',
			link: 'https://www.linkedin.com/pulse/building-your-first-crud-app-go-hands-on-tutorial-zackaria-slimane-/',
		},
		{
			id: uid(),
			title: 'React Ecosystem in 2023 - Brief overview',
			link: 'https://www.linkedin.com/pulse/react-ecosystem-2023-brief-overview-zackaria-slimane-/',
		},
		{
			id: uid(),
			title: 'Demystifying React useContext Hook',
			link: 'https://www.linkedin.com/pulse/demystifying-reacts-usecontext-hook-zackaria-slimane-/',
		},
	],

	projects: [
		{
			id: uid(),
			title: 'Golang api template',
			description: 'Basic starter of a Go API microservice dockerized',
			linkText: 'View Project',
			link: 'https://github.com/slzakaria/go-docker-ms',
			featured: true,
		},
		{
			id: uid(),
			title: 'CICD labs',
			description: 'My contribution to the prepare.sh labs',
			linkText: 'View Project',
			link: 'https://github.com/slzakaria/azurelabs',
			featured: true,
		},
		{
			id: uid(),
			title: 'Terraform AWS template',
			description: 'Provisioning starter for AWS resources using Terraform',
			linkText: 'View Project',
			link: 'https://github.com/slzakaria/terraform-ec2',
			featured: true,
		},
		{
			id: uid(),
			title: 'Helm charts & kubernetes deployement',
			description: 'Helm and kubernetes deployement of a python api',
			linkText: 'View Project',
			link: 'https://github.com/slzakaria/python-api---helm-kubernetes-deployement',
			featured: true,
		},
		{
			id: uid(),
			title: 'Pennysense Budget app',
			description: 'Personal finance and budgeting app',
			linkText: 'View Project',
			link: 'https://budgets.zakariaslimane.xyz/',
			featured: true,
		},
		{
			id: uid(),
			title: 'unFetch image provider',
			description: 'Search image wrapper , list and download high res images',
			linkText: 'View Project',
			link: 'https://unfetch.vercel.app/',
			featured: false,
		},
		{
			id: uid(),
			title: 'Bank product template',
			description: 'Responsive & modern landing page for a Bank',
			linkText: 'View Project',
			link: 'https://echelonbank.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'Agency Template',
			description: 'Landing page for an agency',
			linkText: 'View Project',
			link: 'https://agency-templace.vercel.app/',
			featured: false,
		},
		{
			id: uid(),
			title: 'Cvforge resume maker - Desktop app',
			description: 'A resume maker.',
			linkText: 'View Project',
			link: 'https://cvforge.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'Golang CLI notes',
			description: 'Golang CLI tasks application',
			linkText: 'View Project',
			link: 'https://github.com/slzakaria/gotask',
			featured: false,
		},
		{
			id: uid(),
			title: 'Gittrackr issues tracker',
			description: 'A docker GoLang REST API with React front',
			linkText: 'View Project',
			link: 'https://gittrackr.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'Urbandrugstore wordpress ecommerce',
			description: 'E-commerce website  - online beauty and drugstore',
			linkText: 'View Project',
			link: 'https://urbandrugstore.ma/',
			featured: false,
		},
		{
			id: uid(),
			title: 'BeautyMall wordpress ecommerce',
			description: 'E-commerce website  - online beauty and drugstore',
			linkText: 'View Project',
			link: 'https://beautymall.ma/',
			featured: false,
		},
	],
};

export default siteData;
