pipeline {
    agent any

    stages {

        stage('Stop Old Containers') {
            steps {
                bat 'docker-compose down'
            }
        }

        stage('Build Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }

    }

    post {
        always {
            echo 'Deployment Completed'
        }
    }
}
