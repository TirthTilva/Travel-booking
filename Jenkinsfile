pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/TirthTilva/Travel-booking.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t yashpatel0296/travel-world-app:01 ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t yashpatel0296/travel-world-app:02 ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push yashpatel0296/travel-world-app:01'
                sh 'docker push yashpatel0296/travel-world-app:02'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
