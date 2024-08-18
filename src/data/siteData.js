const uid = () => crypto.randomUUID();

const siteData = {
	main: {
		title: 'Zakaria Slimane Software Developer | JavaScript DevOps & Cloud',
		offTitle: 'Zakaria Slimane | JavaScript DevOps & Cloud',
		name: 'Zakaria Slimane',
		email: 'slzackaria@gmail.com',
	},
	socials: {
		github: 'https://github.com/Zackaria-Slimane',
		linkedin: 'https://www.linkedin.com/in/zakaria-slimane/',
		resume: 'https://drive.google.com/file/d/1EXekq3OSwmrj8MRveG9m8R-zFmGg20jT/view?usp=sharing',
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
			title: 'Jenkins DevOps: EC2 Automated Builds and Docker Deployments',
			link: 'https://www.linkedin.com/pulse/jenkins-devops-ec2-automated-builds-docker-zackaria-slimane--o59re',
		},
		{
			id: uid(),
			title: 'Automating Infrastructure Deployment with Terraform (AWS)',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_devops-aws-terraform-activity-7141501700237848577-OvyE',
		},
		{
			id: uid(),
			title: 'AWS EC2 Instance Setup and Secure CI/CD Pipeline with Jenkins',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_devops-cicd-jenkins-activity-7132072448983748608--Ikf',
		},
		{
			id: uid(),
			title: 'GitHub Issues Tracker with Go, React, and Docker',
			link: 'https://www.linkedin.com/pulse/learning-golang-hands-github-issues-tracker-go-react-docker-slimane-?trackingId=tGzX9JdqTNqOcpZDdOqE7w%3D%3D',
		},
		{
			id: uid(),
			title: 'Building Your First CRUD App in Go: A Hands-On Tutorial',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_go-golang-mysql-activity-7116526295160631296-lHnf',
		},
		{
			id: uid(),
			title: 'React Ecosystem in 2023 - Brief overview',
			link: 'https://www.linkedin.com/pulse/react-ecosystem-2023-brief-overview-zackaria-slimane-/?trackingId=vYnyyQTkReeGdqNLDwhyHw%3D%3D',
		},
	],

	projects: [
		{
			id: uid(),
			title: 'Golang api template',
			description: 'Basic starter of a Go API microservice dockerized',
			linkText: 'View Project',
			link: 'https://github.com/Zackaria-Slimane/go-docker-ms',
			featured: true,
		},
		{
			id: uid(),
			title: 'Terraform AWS template',
			description: 'Provisioning starter for AWS resources using Terraform',
			linkText: 'View Project',
			link: 'https://github.com/Zackaria-Slimane/terraform-ec2',
			featured: true,
		},
		{
			id: uid(),
			title: 'Pennysense Budget app',
			description: 'Personal finance and budgeting app',
			linkText: 'View Project',
			link: 'https://pennysense.vercel.app/',
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
			title: 'Nextjs Startup Template',
			description: 'Landing page for a startup',
			linkText: 'View Project',
			link: 'https://startup-tailwind.vercel.app/',
			featured: false,
		},
		{
			id: uid(),
			title: 'SaaS product Template',
			description: 'Landing page for a SaaS product',
			linkText: 'View Project',
			link: 'https://formifi.vercel.app/',
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
			link: 'https://github.com/Zackaria-Slimane/gotask',
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
