pipeline {
    agent any
    environment {
		DOCKER_IMAGE = 'makohon/chat_client_server'
    }
    stages {
        stage('Start') {
            steps {
                echo 'Cursova_Site: nginx/custom'
            }
        }

        stage('Build Site services') {
            steps {
                dir("FalcoN-Chat-Client-Server")
				{
					sh 'docker-compose build'
				}
				sh 'docker tag chat-client:latest $DOCKER_IMAGE:chat-client-latest'
                sh 'docker tag chat-client:latest $DOCKER_IMAGE:chat-client-$BUILD_NUMBER'
				sh 'docker tag chat-server:latest $DOCKER_IMAGE:chat-server-latest'
                sh 'docker tag chat-server:latest $DOCKER_IMAGE:chat-server-$BUILD_NUMBER'

            }
            post{
                failure {
                    script {
                    // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\n Branch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\n Failure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }

        stage('Test Site services') {
            steps {
                echo 'Pass'
            }
            post{
                failure {
                    script {
                    // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\nBranch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\nFailure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }

		stage('Push to registry') {
            steps {
                withDockerRegistry([ credentialsId: "dockerhub_token", url: "" ])
                {
                    sh "docker push $DOCKER_IMAGE:chat-server-latest"
                    sh "docker push $DOCKER_IMAGE:chat-server-$BUILD_NUMBER"
					sh "docker push $DOCKER_IMAGE:chat-client-latest"
                    sh "docker push $DOCKER_IMAGE:chat-client-$BUILD_NUMBER"
                }
            }
            post{
                failure {
                    script {
                    // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\nBranch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\nFailure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }

        stage('Deploy Site services') {
            steps {
				dir("Weather_TgBot_Server_Website"){
					sh "docker-compose down -v"
                	sh "docker container prune --force"
                	sh "docker image prune --force"
                	sh "docker-compose up -d --build"
				}
            }
            post{
                failure {
                    script {
                    // Send Telegram notification on success
                        telegramSend message: "Job Name: ${env.JOB_NAME}\nBranch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}\nFailure stage: '${env.STAGE_NAME}'"
                    }
                }
            }
        }
    }

    post {
        success {
            script {
                // Send Telegram notification on success
                telegramSend message: "Job Name: ${env.JOB_NAME}\n Branch: ${env.GIT_BRANCH}\nBuild #${env.BUILD_NUMBER}: ${currentBuild.currentResult}"
            }
        }
    }
}
