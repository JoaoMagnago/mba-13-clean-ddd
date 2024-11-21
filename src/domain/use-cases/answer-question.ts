import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
  instructurId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({ instructurId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId: instructurId, questionId })

    return answer
  }
}