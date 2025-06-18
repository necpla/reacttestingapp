pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "reacttestingappimage"
        CONTAINER_NAME = "reacttestingappcontainer"
    }

    tools {
        nodejs 'NodeJS_20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Testing React App') {
            steps {
                bat 'CI=true npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t %DOCKER_IMAGE% ."
                }
            }
        }

        stage('Deploy to Environment') {
            steps {
                script {
                    bat """
                    docker stop %CONTAINER_NAME% || echo Not running
                    docker rm %CONTAINER_NAME% || echo Not found
                    docker run -d -p 3000:80 --name %CONTAINER_NAME% %DOCKER_IMAGE%
                    """
                }
            }
        }
    }

    post {
        success {
            echo "'${env.BRANCH_NAME}' branch pipeline completed successfully."
        }
        failure {
            echo "'${env.BRANCH_NAME}' branch pipeline failed."
        }
    }
}
