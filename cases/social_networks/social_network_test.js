import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import settings from '../../steps/sidebar/settings';
import letters from '../../steps/letters';

describe('socials test smart grouping', () => {
	after('Отключить умную сортировку', () => {
		settings.setSmartGrouping();
	});

	it('Авторизоваться и проверить письмо-оповещение от VK', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);
		settings.setSmartGrouping();
		folders.clickFolderByName('Социальные сети');
		letters.letterPresents('У Вас 13 новых личных сообщений и ещё 1 событие');
	});
});
