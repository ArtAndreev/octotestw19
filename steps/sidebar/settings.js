import DefaultSteps from '../default';
import page from '../../pages/sidebar/button';

class SettingsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	setSmartGrouping() {
		this.page.clickButtonByDataQAID('dropdown-settings');
		this.page.clickButtonByDataQAID('metathreads-toggle');
	}

}

export default new SettingsSteps();
