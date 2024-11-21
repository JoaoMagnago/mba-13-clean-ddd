import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

interface AnswerQuestionUseCaseRequest {
  instructurId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswersRepository
  ) { }

  async execute({ instructurId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructurId,
      questionId
    })

    await this.answersRepository.create(answer)

    return answer
  }
}