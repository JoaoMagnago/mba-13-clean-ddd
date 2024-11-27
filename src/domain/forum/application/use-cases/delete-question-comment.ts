import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

// eslint-disable-next-line prettier/prettier
interface DeleteQuestionCommentUseCaseResponse { }

export class DeleteQuestionCommentUseCase {
  constructor(
    private questionCommentsRepository: QuestionCommentsRepository,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (!questionComment) {
      throw new Error('Question comment not found.')
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed')
    }

    await this.questionCommentsRepository.delete(questionComment)

    return {}
  }
}
