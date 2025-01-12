pipeline {
    agent any

    tools {
        jdk 'jdk17'
        nodejs 'node20'
    }

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {
        stage('Clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Git checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Zackaria-Slimane/zsportfolio.git'
            }
        }

        stage("SonarQube static Analysis") {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh """$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=ZSportfolio \
                        -Dsonar.projectKey=ZSportfolio"""
                }
            }
        }

        stage("SonarQube gate check") {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonarqube'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('OWASP Security FS SCAN') {
            steps {
                dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'dp-check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        stage('TRIVY FS SCAN') {
            steps {
                sh "trivy fs . > trivyfs.txt"
            }
        }

       stage("Docker Setup, Build & Push") {
						steps {
								script {
										withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
												sh "docker buildx build -t zsportfolio ."
												sh "docker tag zsportfolio zackariasl/zsportfolio:latest"
												sh "docker push zackariasl/zsportfolio:latest"
										}
								}
						}
				}

        stage("Docker image TRIVY Scan") {
            steps {
                sh "trivy image zackariasl/zsportfolio:latest > trivy.txt"
            }
        }

        stage('Docker build || run container') {
            steps {
                script {
                    def containerName = 'cicd'
                    def containerExists = sh(script: "docker ps -a --format '{{.Names}}' | grep -w ${containerName}", returnStatus: true) == 0

                    if (containerExists) {
                        echo "Container ${containerName} already exists."
                        sh "docker start ${containerName}"
                    } else {
                        echo "Container ${containerName} building from scratch"
                        sh "docker run -d --name ${containerName} -p 3000:3000 zackariasl/zsportfolio:latest"
                    }
                }
            }
        }
				stage('Deploy to kubernetes'){
            steps{
                script{
                    withKubeConfig(caCertificate: '', clusterName: 'zsportfolioK8s', contextName: '', credentialsId: 'k8s', namespace: '', restrictKubeConfigAccess: false, serverUrl: '') {
                       sh 'kubectl apply -f appspec.yml'
                  }
                }
            }
        }
    }

    post {
        always {
            emailext attachLog: true,
                subject: "'${currentBuild.result}'",
                body: "Project: ${env.JOB_NAME}<br/>" +
                    "Build Number: ${env.BUILD_NUMBER}<br/>" +
                    "URL: ${env.BUILD_URL}<br/>",
                to: 'slzackaria@gmail.com',
                attachmentsPattern: 'trivy.txt'
        }
    }
}