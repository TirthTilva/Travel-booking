pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YashPatel216/Travel-booking.git'
            }
        }

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
