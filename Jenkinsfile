pipeline {
    agent any

    stages {


        stage('Build Docker Image') {
            steps {
                bat 'docker build -t mern-backend .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 4000:4000 mern-backend'
            }
        }
    }
}
