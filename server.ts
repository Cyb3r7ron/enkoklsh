import express, {Request, Response } from 'express'
import axios, {AxiosResponse} from 'axios'

const PORT = 8000
const app = express()

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        
        const response: AxiosResponse = await axios.get('https://743851f7-8a4e-4d9c-9af9-4bbcb5bf5c51-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/enkoklsh_questions', {
            headers: {
                'X-Cassandra-Token': 'AstraCS:vpeSgEgKafRmFxxwjpwalbkf:1aa3c5e2a89d5d4d6216819900316592d34396a7a86b5edfb4d4da7a96811497',
                accept: 'application/json'
            }
        })
        if (response.status === 200) {
            const quizItem = await response.data.data['edb286e7-3e25-4de6-9d43-f6426b09a31e']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log('server is running on port ' + PORT))
