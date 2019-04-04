import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';

// пример теста
describe('test id', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);
		folders.clickFolderByName('Входящие');
		letters.openBySubject('Mail.ru – больше, чем почта. Познакомьтесь с проектами Mail.ru Group');
	});
});
