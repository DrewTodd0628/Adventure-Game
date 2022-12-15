pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'gradlew modules:backend:build'
                bat 'cd modules/frontend'
                dir('modules/frontend') {
                    bat 'npm install'
                bat 'ng build'
                }
            }
        }

        stage('Publish') {
            steps {
                echo "Build Successful"
            }

            post {
                success {
                    archiveArtifacts 'modules/backend/build/libs/*.jar'
                }

                // cleanup {
                //     cleanWs disableDeferredWipeout: true, deleteDirs: true
                // }
            }
        }
    }
}
