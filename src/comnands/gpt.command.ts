import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { OpenaiService } from 'src/openai/openai.service';

@Command({
	name: 'gpt',
	description: 'Запрос к OPEN AI',
	options: {
		isDefault: true,
	},
})
export class GPTCommand extends CommandRunner {
	constructor(
		private readonly inquirer: InquirerService,
		private readonly openaiService: OpenaiService,
	) {
		super();
	}
	async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
		const res = await this.inquirer.ask<{ text: string }>('text-question', undefined);
		const aiResp = await this.openaiService.generateResponse([
			{
				role: 'user',
				content: 'Выступай в роли ИТ - эксперта и развернуто отвечай на вопросы',
			},
			{
				role: 'user',
				content: res.text,
			},
		]);
		console.log(aiResp);
	}
}
