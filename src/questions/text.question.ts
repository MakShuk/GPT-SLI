import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'text-question' })
export class TextQuestion {
	@Question({
		message: 'Что вы хотите чтобы я подсказал?',
		name: 'text',
	})
	parseTask(val: string) {
		return val;
	}
}
