pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = 'docker-compose'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Stop Old Containers') {
            steps {
                echo 'Stopping old containers...'
                bat "${DOCKER_COMPOSE} down"
            }
        }

        stage('Build Images') {
            steps {
                echo 'Building Docker images...'
                bat "${DOCKER_COMPOSE} build --no-cache"
            }
        }

        stage('Run Containers') {
            steps {
                echo 'Starting containers...'
                bat "${DOCKER_COMPOSE} up -d"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying deployment...'
                bat "${DOCKER_COMPOSE} ps"
            }
        }
    }

    post {
        success {
            echo 'Deployment Completed Successfully!'
        }
        failure {
            echo 'Deployment Failed!'
            bat "${DOCKER_COMPOSE} logs"
        }
        always {
            echo 'Pipeline Finished'
        }
    }
}
