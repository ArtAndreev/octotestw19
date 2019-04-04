import DefaultPage from '../default';

class SidebarButtonPage extends DefaultPage {
	constructor() {
		super('settings-button')
	}

	get locators() {
		const container = '[data-qa-id="sidebar"]';
		return {
			container,
			buttonByDataQAID: (data_qa_id) => container + ` [data-qa-id="${data_qa_id}"]`
		}
	}

	/**
	 * Клик по кнопке, используя data-qa-id ее контейнера
	 * @param {string} css_class
	 */
	clickButtonByDataQAID(data_qa_id) {
		const locator = this.locators.buttonByDataQAID(data_qa_id);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new SidebarButtonPage();
