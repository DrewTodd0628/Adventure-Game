pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'gradlew modules:backend:build'
            }
        }

        stage('Publish') {
            steps {
                success {
                    archiveArtifacts '**/modules/backend/build/libs/*.jar'
                }
            }

            // post {
            //     cleanup {
            //         cleanWs disableDeferredWipeout: true, deleteDirs: true
            //     }
            // }
        }
    }
}
